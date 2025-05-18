+++
date = '2025-05-16'
draft = false
title = 'Stream Your Screen as a Webcam'
+++

## Why

Well, Microsoft Teams sucks, and it sucks even more on Linux. Now the web app was bearable until I realized it wouldn't let me share my screen. This isn't an isolated issue. A lot of video calling clients struggle to handle screen sharing on Linux. Discord at least manages to share the screen without audio. In this blog post, I'll walk you through a workaround that works on all clients I tested.

## Sharing your audio through your mic

Using a patch bay or an audio routing tool. You can route a certain application's audio to the input of the application you'd like to steam to. Avoid routing your output monitor to your input, as the people you're on call with will be able to hear themselves.

I would recommend using PipeWire to handle routing and any routing/patchbay GUI applications built for it. Reference this [Arch wiki page](https://wiki.archlinux.org/title/PipeWire#GUI) to find a application that works for you.

## Sharing your screen as a virtual camera

This is where the fun begins. If you are less experienced with Linux, I would highly recommend using OBS and its virtual cam functionality to get started quickly. Combining it with the techniques covered, you can get full "steaming" functionality.

Otherwise, I created a Python script to directly create a virtual camera using the `v4l2loopback` module and stream screen to the virtual camera using `ffmpeg`

### The commands used
First things first, lets cover the commands that we will automate:

1. To ensure that `v4l2loopback` is loaded:
{{< highlight bash >}}
modprobe v4l2loopback devices=1 video_nr=10 card_label="VirtualCam" exclusive_caps=1
{{< /highlight >}}

1. We then create a virtual camera:
{{< highlight bash >}}
sudo modprobe v4l2loopback devices=1 video_nr=10 card_label="VirtualCam" exclusive_caps=1
{{< /highlight >}}

1. Finally we use `FFMPEG` to stream screen directly to the virtual camera:
{{< highlight bash >}}
ffmpeg -video_size 1920x1080 -framerate 30 -f x11grab \
-i :0.0+0,0 -pix_fmt yuv420p -f v4l2 /dev/video10
{{< /highlight >}}

### The Python script

I created a Python script to automate this process. Scripting this allows us to check weather everything is in order.

1. The modules used:
{{< highlight python "linenos=inline" >}}
#!/bin/python
import shutil
import os
{{< /highlight >}}

1. Some helper functions
{{< highlight python "linenos=inline" >}}
def is_tool(name):
    """Check whether `name` is on PATH and marked as executable."""
    return shutil.which(name) is not None


def checking_loopback():
    res = os.popen("whereis v4l2loopback")
    out = res.read().split(':')[1]
    if len(out) >= 2:
        return True
    else:
        return False
{{< /highlight >}}
`checking_looopback` specifically checks if `v4l2loopback` is available.

1. The `main` function
{{< highlight python "linenos=inline" >}}
def main():
    print("Please ensure v4l2loopback is installed")
    if not checking_loopback():
        print("Can't find v4l2loopback")
        return 0

    for i in ["modprobe", "ffmpeg"]:
        if not is_tool(i):
            print(f"Tool not found, install {i}")
            return 0

    print("Reloading v4l2loopback")
    cmd = "sudo modprobe -r v4l2loopback"
    if os.system(cmd) != 0:
        print("Failed to reload v4l2loopback")

    print("Creating virtual camera")
    cmd = """sudo modprobe v4l2loopback devices=1 \
video_nr=10 card_label="VirtualCam" exclusive_caps=1"""
    if os.system(cmd) != 0:
        print(f"Failed to load module: {cmd}")

    print("Running stream")
    cmd = """ffmpeg -video_size 1920x1080 -framerate 30 -f x11grab \
-i :0.0+0,0 -pix_fmt yuv420p -f v4l2 /dev/video10"""
    os.system(cmd)
{{< /highlight >}}

The code first checks that `v4l2loopback`, `modprobe` and `ffmpeg` are installed. Then we simply run the commands to get everything set up.

You can find `virtual_cam.py` [here](https://github.com/V01Ddev/dotfiles/blob/main/scripts/virtual_cam.py).

## Conclusion

As cool as this is, it is a workaround nonetheless. I hope to see developers on all platforms take a more active approach to supporting Linux. I think most applications can deal with this by relying on PipeWire being installed.
