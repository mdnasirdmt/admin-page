var arr = JSON.parse(localStorage.getItem('adminData')) || [];
// let arr= []
document.querySelector('form').addEventListener('submit',dataUpload)

function dataUpload(){
    event.preventDefault()
    // alert('hi')
    var con=confirm('do you want to upload ?')
    if(con==true)
    {

        let product=document.querySelector('#product').value;
        let catog=document.querySelector('#cato').value;
        
        let price=document.querySelector('#price').value;
        
        let image=document.querySelector('#image').value;
        
        let gender=document.querySelector('#gender').value;
    
    
        let obj={
            pro:product,
            cat:catog,
            pri:price,
            ima:image,
            gen:gender
    
        }
        arr.push(obj)
    }

    console.log(arr)
    localStorage.setItem("adminData", JSON.stringify(arr));
    
    
}