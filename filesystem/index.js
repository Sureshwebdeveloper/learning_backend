const fs = require("fs");

// create folder
fs.mkdir('Folder', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("folder created");
});

// dynamic data already exisist folder inside create new file and add text
fs.writeFile(
  'Folder/file.txt',
  `i am from file and this \n ${new Date()} \n  time i was created`,
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);

fs.writeFile("Folder/NewFile.txt", "i am from txt file", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File Created Successfully");
});

// readFile
const dataJSON = require("./data.json");
const { log, Console } = require("console");
console.log(dataJSON);
// for view value which type
var data = dataJSON.find((data) => {
  return data.id === 3;
});

console.log(data);

// Task
// 1.create Folder FIlterdData
fs.mkdir("filterData", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("folder created");
});
// 2. essaki -> essaki.txt
fs.writeFile(
  `filterData/${data.name.toLocaleLowerCase()}.txt`,
  `Hello my Name is ${data.name.toLocaleUpperCase()} and I am Learning NodeJs`,
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("folder created");
  }
);
// 3.hello my name is Eski, i am learning node js
// now you get out put

// ----------------------------------------------------------------------------------
// append
fs.appendFile(
  `filterData/${data.name.toLocaleLowerCase()}.txt`,
  "\n i am from append Text",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

// loop a data on json  File
fs.mkdir("ExamApplied_people", (err) => {
  if (err) {
    console.log(err);
  }
});

const datas = dataJSON;
for (let i = 0; i < datas.length; i++) {
  fs.writeFile(
    `ExamApplied_people/${datas[i].name.toLocaleLowerCase()}.txt`,
    `Hello my Name is ${datas[
      i
    ].name.toLocaleUpperCase()} and I am Learning NodeJs`,
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("folder created");
    }
  );
}
