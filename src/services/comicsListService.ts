import axios from "axios";
import md5 from 'md5';
import { publicKey, privateKey } from "./key";

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);
const baseURL = `http://gateway.marvel.com/v1/public/comics?orderBy=-modified&limit=100&ts=${time}&apikey=${publicKey}&hash=${hash}`;

export const comicsListService = axios.get(baseURL);