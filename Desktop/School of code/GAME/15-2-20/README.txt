
  ___ ___   _   ___  __  __ ___ 
 | _ \ __| /_\ |   \|  \/  | __|
 |   / _| / _ \| |) | |\/| | _| 
 |_|_\___/_/ \_\___/|_|  |_|___|
                                

Good Greif! What a lot of folders. Have you had a look? If you haven't, `ls` now to see what were dealing with.

Most of these folders have contain nothing of interest. We need to find the folder that contains a file called secret_plans.txt.

Knowing what we do already we could search each folder manually (`cd folder`, `ls`, `cd ..`, `cd nextFolder` etc.)

Luckily, an inteligence report has come in which says that there is a log book in the same folder as secret_plans.txt. The log book is large which means we are looking for the largest folder. 

The command `ls -l` lists the contents of the current directory with useful information about each item.

👉 Use `ls -l` to find the biggest folder, cd into it and read secret_plans.txt

If you're not sure which is biggest try `ls -lh` which makes the results more human readable or `ls -lS` which will order the largest file first.

