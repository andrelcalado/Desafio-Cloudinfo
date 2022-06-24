import axios from "axios";
import md5 from 'md5';

const publicKey = 'c7ff70ab30402dc4da556363c1324355';
const privateKey = 'f34822eb99576b2fefbf610ed9621e52ea9751b2';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);
// const baseURL = `http://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`;
const baseURL = `http://gateway.marvel.com/v1/public/comics?orderBy=-modified&limit=100&ts=${time}&apikey=${publicKey}&hash=${hash}`;

export const comicsListService = axios.get(baseURL);