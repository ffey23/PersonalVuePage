export default class Link {
  constructor({ to, title }) {
    if (!to || typeof to != 'string') {
      throw Error('Parameter "to" must be non-empty string')
    }
    if (!title || typeof title != 'string') {
      throw Error('Parameter "title" must be non-empty string')
    }

    this.to = to
    this.title = title
  }
}
