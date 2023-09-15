"use strict";

// Перше
// const recen = "Lorem ipsum dolor sit amet consectetur adipiscing elit";
// let ret = recen.split(" ");

// const searchFive = ret.filter(function (fivers) {
//   return fivers.length >= 5;
// });
// console.log(searchFive);

// Друге

class Tag {
  constructor(tagName, content, attribute, typeTag = true) {
    this.tagName = tagName;
    this.content = content;
    this.attribute = attribute;
    this.typeTag = typeTag;
  }

  generateAttribute(attr, value) {
    let temp = value;
    if (attr === "class") {
      temp = this.generateClassString(value);
    }
    if (attr === "style") {
      temp = this.generateStyleString(value);
    }
    return `${attr}="${temp}" `;
  }

  generateClassString(value) {
    let str = "";
    value.forEach((elem) => {
      str += elem + " ";
    });
    return str;
  }

  generateStyleString(value) {
    let str = "";
    for (let key in value) {
      str += key + ":" + value[key] + ";";
    }
    return str;
  }

  generateAllAttributes() {
    let str = "";
    for (let elem in this.attribute) {
      str = str + this.generateAttribute(elem, this.attribute[elem]);
    }

    return str;
  }

  generateTag() {
    if (this.typeTag) {
      return `<${this.tagName} ${this.generateAllAttributes()}> ${this.content} </${this.tagName}>`;
    } else {
      return `<${this.tagName} ${this.generateAllAttributes()}`;
    }
  }

  printTagToDocument() {
    document.write(this.generateTag());
  }
  deleteClass(param) {
    this.attribute.class = this.attribute.class.filter((elem) => elem !== param);
  }
}

const objAttribute = {
  class: ["test3, test1, test2"],
  id: "home",
  title: "Спливаюча підказка",
  style: { color: "red", order: 1 },
};
const h = new Tag("h1", "Привіт! я заголовок", objAttribute);
h.printTagToDocument();
