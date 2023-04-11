function suma(n1,n2){
    return new Promise(
        (resolve,reject)=>{
            let verificarN1=esNumero(n1)
            console.log(verificarN1)
            let verificarN2=esNumero(n2)
            console.log(verificarN2)
            if(verificarN1.number&&verificarN2.number){
            let verificarSumaMayorCero=verificarN1.number+verificarN2.number//Sumo propiedades number de ambas funciones
            if(verificarSumaMayorCero>0){
                return resolve (verificarSumaMayorCero)
            }else{
                return reject({
                    error3:"La suma da negativo"
                })
            }
            
        }else{
                return reject({
                    n1: verificarN1.message ?? "el numero esta correcto", 
                    n2 : verificarN2.message
                    })
            }    
        }
    )
    }

//USAR THEN Y CATCH
//suma(0,10).then(res=>console.log(res)).catch(err=>console.log(err))
//USANDO ASYNC/AWAIT
//calculos("chau",3,suma)

async function calculos(num1,num2,operacion){
    try {
        let calculo = await operacion(num1,num2)
        console.log(calculo)
        return calculo
    } catch(error) {
        console.log(error)
        return error
    }
}


function esNumero(num){
    if (isNaN(num)) {
        let message = 'Solo números'
        return { success: false, message }
    } else if (num===0) {
        let message = 'Operación innecesaria'
        return { success: false, message }
    } else {
        return { success: true, number: num }
    }
}



function resta(n1,n2){
    return new Promise(
        (resolve,reject)=>{
            let verificarN1 = esNumero(n1)
            let verificarN2 = esNumero(n2)
            //verifico resultado positivo
            if(verificarN1.number && verificarN2.number){
                let resultado=verificarN1.number- verificarN2.number
                if(resultado>0){
                    return resolve(resultado)
                }else{
                    return reject({
                        error: "la calcularado valores positivos"
                })
                }
            }else{
                return reject({
                    n1: verificarN1.message ?? "el numero esta correcto", 
                    n2 : verificarN2.message
                })
            }
        }
    )

}
calculos("hola",3,resta)