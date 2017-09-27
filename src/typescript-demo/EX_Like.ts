/**
 * Created by kapoor on 27-09-2017.
 */

export class Like {
  constructor(private _numLike?: number, private _on?: boolean) {
  }

  get numberLikes() {
    return this._numLike;
  }

  likePost() {
    this._numLike += this._on ? -1 : +1;
    this._on = !this._on;
  }

  get numberLike() {
    return this._numLike;
  }

  get on() {
    return this._on;
  }
}
