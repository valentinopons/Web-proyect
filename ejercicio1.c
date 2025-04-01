#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>
#include <signal.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <time.h>

int n;
int numero_maldito;
pid_t hijos[10];

typedef struct{
    int pid;
    int id;

} hijo;
int generate_random_number(){
    //Funcion para cargar nueva semilla para el numero aleatorio
    srand(time(NULL) ^ getpid());
    return (rand() % n);
}
void sigschld_handler(){
    pid_t p = wait(NULL);
    for (int i = 0; i < n; i++)
    {
        if (p == hijos[i])
        {
            hijos[i] =-1;
        }
        
    }
    
}
void sigterm_handler(int codeSignal){
    int n = generate_random_number();
    printf("hijo con pid:%d con numero %d\n",getpid(),n);
    if (n == numero_maldito){
        printf(" XXX \n");        
        exit(0);
    
    }
    

}

int main(int argc, char const *argv[]){
    
    n = atoi(argv[1]);
	int rondas = atoi(argv[2]);
	numero_maldito = atoi(argv[3]);
    
    pid_t pid;
    


    for (int i = 0; i < n; i++){
        pid = fork();
        if (pid == 0) {
            break; 
        }
        hijos[i] = pid;
    
    }
    if (pid == 0){
        signal(SIGTERM, sigterm_handler);
        while (1)
        {
        }
    }

    //cuando termina el proceso padre ejecuta esto:
    signal(SIGCHLD, sigschld_handler);
    for (int k = 1; k <= rondas; k++){
        printf("se juega ronda: %d\n", k);
        for (int i = 0; i < n; i++){
            if (hijos[i]!= -1)
            {
                kill(hijos[i],SIGTERM); //ejecuta señales hijo a hijo
                sleep(1);
            }
            
            
        }
        
        
    }
    exit(0);
}

    

