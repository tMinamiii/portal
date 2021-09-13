#include<unistd.h>

int main(){
  const void *string = "Hello Write!\n";
  write(1, string, 13);
  return 0;
}
