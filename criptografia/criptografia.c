#include <stdio.h>
#include <ctype.h>

int main() {
    char frase[100];
    int criptografia[100];
    int i = 0;

    printf("Digite uma frase: ");
    fgets(frase, sizeof(frase), stdin);

    while (frase[i] != '\0') {
        char c = frase[i];

        if (isalpha(c)) { 
            if (islower(c)) {
                criptografia[i] = c - 'a' + 1; 
            } else { 
                criptografia[i] = c - 'A' + 1; 
            }
            printf("%i ", criptografia[i]);
        } else {
            criptografia[i] = 0; 
        }

        i++; 
    }

    printf("\n");
    return 0;
}
