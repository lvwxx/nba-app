import { reject, resolve } from '_any-promise@1.3.0@any-promise';

const MongoClient = require('mongodb').MongoClient; 
const DB_CONN_STR = 'mongodb://localhost:27017/'; //数据库地址

const date = new Date();
const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth();
const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
const TODAY = `${month}月${day}日`;

async function getResult(dateStr=TODAY) {
    return new Promise((resolve,reject)=>{
        MongoClient.connect(DB_CONN_STR, (err, db) => {
            if (err) {
                console.log(err);
            }
            console.log('链接成功');
            const myDB = db.db('test');
            console.log(dateStr);
            myDB.collection('gameResult').find({dateStr,}).toArray((err, res) => {
                if (err) {
                    console.log(err);
                    reject(res);
                }
                resolve(res);
            });
            db.close();  
        });
    })
    
}

export const getDayResults = async (ctx) => {
         // 连接mongo数据库并查找数据
        const result = await getResult();
        ctx.body = result;
};