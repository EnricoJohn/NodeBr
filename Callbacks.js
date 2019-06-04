 function getUser(callback) {
        setTimeout(function() {
            return callback(null , {
                id: 1,
                name: 'Alladin',
                birthday: new Date()
            })
        }, 1000)
 };

 function getPhone(iduser, callback) {
    setTimeout(() => {
        return callback(null, {
            telephone: '91461801',
            ddd: 83
        })
    }, 2000)
 };

 function getAddress(iduser, callback) {
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


getUser(function resolveUser(error, user) {
   
    if (error) {
        console.error('Deu Ruim em USER', error)
        return;
    }
    getPhone(user.id,  function resolvePhone(error1, phone) {
        if (error) {
            console.error('Deu Ruim em Telefone', error)
            return;
        }
    })
    getAddress(user.id, function resolveAddress(error2, address) {
        if (error) {
            console.error('Deu Ruim em Endereço', error)
            return;
        }

        console.log(`
            Name: ${user.name},
            Address: ${address.address}
        `)
    })
})