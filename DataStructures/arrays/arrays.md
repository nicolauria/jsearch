# Static Arrays

Static arrays have a fixed length.
They only have two methods available to them:
<br />[]
<br />[]=

They do not have methods such as push and pop because they cannot be resized. When we initialize the array we set a length. The program requests a certain amount of memory from the operating system.

Each of these cells has a physical address. For example, 800, 808, 816, 824. These will always be multiples of 8 in a 64 bit architecture. Each of our cells holds
8 bytes of information or 64 bits.

When we initialize the static array it sends us back the physical address of the first cell and we already have the length so we can access all cells.

Our Ruby or Javacsript program now can access any of those cells by taking the location of the first cell and adding (idx * 8). This is simple arithmetic and gives
us constant lookup and assignment time.
