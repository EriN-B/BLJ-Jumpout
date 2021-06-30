export class BlogPost {

  constructor(id, title, date, message, likes, img) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.message = message;
    this.likes = likes;
    this.img = img;
  }

  id: string;
  title: string;
  date: string;
  message: string;
  likes: number;
  img: string;
}
