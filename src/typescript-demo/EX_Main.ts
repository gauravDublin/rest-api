/**
 * Created by kapoor on 27-09-2017.
 */
import {Like} from './EX_Like';

let lik = new Like(10, false);
lik.likePost();
lik.likePost();
lik.likePost();
console.log(`likes count: ${lik.numberLike}`, `selected: ${lik.on}`);

//tsc EX_Like.ts EX_Main.ts --target ES5 && node EX_Main.js
