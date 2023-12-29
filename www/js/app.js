document.querySelector('#search').addEventListener('input',filterList);
function filterList(){
    const searchInput = document.querySelector('#search');
    const searchFilter = searchInput.value.toLowerCase();
    const listItem = document.querySelectorAll('.item');
    listItem.forEach((item)=>{
        let text = item.textContent;
        if(text.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())){
            
            item.style.display = "";
        }else{
            item.style.display = "none";
        }
    } )
}