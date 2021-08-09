.globl _start
_start:
    movl $4,%eax /* write system call number */
    movl $1,%ebx /* stdout */
    movl $msg,%ecx /* the data to print */
    movl $13,%edx /* length of the buffer */
    int $0x80 /* システムコール実行 割り込み実行 */

    movl $1,%eax /* exit system call number */
    movl $0,%ebx /* exit status */
    int $0x80

.data
    msg: .asciz "Hello,World\n"
