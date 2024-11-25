#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>


int main(int argc, char *argv[]) {

    printf("[*] The MD file should be named after the title of the blog post, the file name will be used in the metadata.\n");
    
    if (access(argv[1], F_OK) == 0) {
        int filenameLen = strlen(argv[1]);
        char filename[filenameLen];

        strcpy(filename, argv[1]);
        filename[filenameLen-2] = '\0'; // Getting rid of file type

        // pandoc test_blog.md --katex --template=template.html -o test_blog.html
        char cmd1[] = "pandoc "; // followed by the full filename
        char cmd2[] = " --katex --template=template.html -o "; // Followed by the filename without the md
        char cmd3[] = "html";

        int totalSize = strlen(cmd1) + strlen(argv[1]) + strlen(cmd2) + filenameLen + strlen(cmd3);

        char cmd[totalSize];
        strcpy(cmd, "");

        strcat(cmd, cmd1);
        strcat(cmd, argv[1]);
        strcat(cmd, cmd2);
        strcat(cmd, filename);
        strcat(cmd, cmd3);

        if (access("template.html", F_OK) == 0) {
            printf("[*] Running: %s\n", cmd);
            system(cmd);
        }
        else {
            printf("[*] template.html not found!\n");
            return -1;
        }
    }
    else {
        printf("[*] File not found or was not passed!\n");
        printf("[*] Please pass the file you'd like to compile.\n");
        return -1;
    }

    return 0;
}
