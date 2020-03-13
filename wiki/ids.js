document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('.titre').forEach(function (x) {
        
        var a = x.innerHTML.replace(".", "").replace("(", "").split("<");
        console.log(a)
        x.id = a[0]
        x.href = "#"+a[0]
        console.log(x)
        
    })

})