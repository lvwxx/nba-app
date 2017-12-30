import { reject, resolve } from '_any-promise@1.3.0@any-promise';

const MongoClient = require('mongodb').MongoClient; 
const DB_CONN_STR = 'mongodb://localhost:27017/'; //数据库地址

async function getResult() {
    return new Promise((resolve,reject)=>{
        MongoClient.connect(DB_CONN_STR, (err, db) => {
            if (err) {
                console.log(err);
            }
            console.log('链接成功');
            const myDB = db.db('test');
            myDB.collection('gameResult').find({dateStr:'12月30日'}).toArray((err, res) => {
                if (err) {
                    console.log(err);
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