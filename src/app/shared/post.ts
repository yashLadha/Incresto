interface Serializable<T> {
  deserialize(input: Object): T;
}

export class Post implements Serializable<Post> {

  title: string;
  author: string;
  content: string;
  id: string;
  thumbnailLink: string;
  shortDescription: string;

  deserialize(input) {
    this.title = input.title;
    this.author = input.author;
    this.content = input.content;
    if (this.content.length > 250) {
      this.shortDescription = this.content.slice(0, 247) + '...';
    } else {
      this.shortDescription = this.content;
    }
    if (input.link) {
      this.thumbnailLink = input.link.replace('"', '');
    }
    return this;
  }

  setId(input) {
    this.id = input;
  }
}
