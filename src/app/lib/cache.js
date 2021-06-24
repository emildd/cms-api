const { init, set, get, deleteAll } = require("node-cache-redis");
const { prefix } = require("../../config/redis");
const redis = require("../../config/redis");
init({
    redisOptions: {
        host: redis.host,
        port: parseInt(redis.port),
    },
    defaultTtlInS: 300
})
const remember = async (key, value, ttl=300) => {
    key = createKey(key)
    return new Promise( async (resolve, reject) => {
        try {
            const getValue = await get(key)
            if(getValue){
                resolve(getValue)
            }else{
                if(typeof value == 'function'){
                    const val = await value()
                    const setValue = await set(key, val, ttl)
                    if(setValue){
                        const result = await get(key)
                        resolve(result)
                    }
                }else{
                    const setValue = await set(key, value, ttl)
                    if(setValue){
                        const result = await get(key)
                        resolve(result)
                    }
                    
                }
            }
        } catch (error) {
            reject(error)
        }
    })
}
const flush = async(key) => {
    key = createKey(key)
    return new Promise(async(resolve,reject) => {
        try {
            const returnedKeys = await deleteAll(key) 
            resolve(returnedKeys)
        } catch (error) {
            reject(error)            
        }
    })
        
}
const flushAll = async () => {
    return await deleteAll()
}
const createKey = (key) => {
    // console.log('from', key)
    const encoded = Buffer.from(key,'ascii').toString('base64')
    // console.log('to', encoded)
    return prefix+encoded
}

module.exports = {
    remember,
    flush,
    flushAll
}