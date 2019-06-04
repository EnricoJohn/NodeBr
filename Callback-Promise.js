const util = require('util')
const getAddressAsync = util.promisify(getAddress) //Nunca usar porque isso aqui é a maior bosta!
 
 function getUser() {
     return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function() {
            //return reject(new Error('Deu ruim de verdade!'))
            return resolve({
                id: 1,
                name: 'Alladin',
                birthday: new Date()
            })
        }, 1000)
     })

 };

 function getPhone(iduser) {
     return new Promise(function resolvePromise(resolve, reject) {
         setTimeout(() => {
            return resolve({
                telephone: '91461801',
                ddd: 83
            })
         }, 2000);
    })
};

 function getAddress(iduser) {
     setTimeout(() => {
        return callback(null, {
            address: 'Rua Saffa Said',
            number:   233
        })
     }), 2000 
};

function resolveUser(erro, user) {
    console.log('User', user)
}

const userPromise = getUser()

userPromise
    .then(function (user) {
        return getPhone(user.id)
            .then(function resolvePhone(result) {
                return {
                    user: {
                        name: user.name,
                        id: user.id
                    },
                    telephone: result
                }
            })
    })
    .then(function (result) {
        const address = getAddressAsync(result.user.id)
        return address.then(function resolveAddress(result) {
            return {
                user: result.user,
                telephone: result.telephone,
                address: result
            }
        })
    })
    .then(function(result) {
        console.log('Resultado:', result)
    })
    .catch(function (error) {
        console.error('Deu Ruim', error)
    })