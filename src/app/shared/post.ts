interface Serializable<T> {
  deserialize(input: Object): T;
}

export class Post implements Serializable<Post> {

  title: string;
  author: string;
  content: string;
  id: string;
  thumbnailLink: string;

  deserialize(input) {
    this.title = input.title;
    this.author = input.author;
    this.content = input.content;
    if (input.link) {
      this.thumbnailLink = input.link.replace('"', '');
    }
    return this;
  }

  setId(input) {
    this.id = input;
  }
}
