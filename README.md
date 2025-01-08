# Todo List dengan Next.js
## Penjelasan Repo
Project ini terinspirasi dari channel YT lice dev klik [disini](https://www.youtube.com/watch?v=6OWcC_6T6nE) lebih lanjutnya. Project dibangun dengan Next.js, bila ingin clone ada library yang diperlukan zod dan json-server
```sh
npm i json-server
node i zod
```
library zod untuk konfirmasi input yang dimasukkan di form todolist
library json-server untuk membuat API custom dengan localhost

## Tampilan Root Todo List
![gambar home](https://github.com/andifirmansyah05/todolist-nextjs/blob/main/public/tampilan-home-todo-list.png)
## Tampilan Form Todo List
![gambar form todolist]()
Penjelasan Singkat
Terdapat Form Todo untuk menambahkan todo list ke display todo list. Dan dibawah terdapat Todo List untuk menampilkan Todo yang ditambahkan di Form Todo.



## Data TodoList
Data todo list ditempatkan difolder `_utils/db.json`. Pada file tersebut data akan diupload dan diakses. Agar dapat menjadi API maka digunakan library `json-server`. Lalu dalam file `package.json` bagian `scripts` ditambahkan `"rest": "json-server --watch ./app/_utils/db.json --port 3001"`. Maka endpoints yang digunakan `http://localhost:3001/todos`.