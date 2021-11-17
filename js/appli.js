// Ẩn hiện filter
document.getElementById('ter').onclick = function() {
    var hidden = document.getElementById("filter");
    if (hidden.style.display === 'none') {
        hidden.style.display = 'block';
        hidden.style.animation = 'fadeIn ease-in 0.5s';
    } else {

        hidden.style.display = 'none';
    }
}

document.getElementById('close').onclick = function() {
        var hidden = document.getElementById("filter");
        if (hidden.style.display === 'block') {
            hidden.style.display = 'none';
        } else {
            hidden.style.animation = 'fadeIn ease-in 0.5s';
        }


    }
    // Ẩn chuyển trang
function page_hide() {
    let page = document.getElementById('chuyentrang');
    page.style.display = 'none';
}
// Ẩn filter
function filter_hide() {
    let filter = document.getElementById("filter");
    filter.style.display = 'none';
}
// Sử dụng cho thanh range
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
slider.oninput = function() {
        output.innerHTML = this.value;
    }
    // Update the current slider value (each time you drag the slider handle)
    //chuyentrang


// Nút backtop
var my_backtop = document.getElementById('backtop');
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        my_backtop.style.display = "block";
        my_backtop.style.animation = 'fadeIn ease-in 0.5s';
    } else {
        my_backtop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.style.animation = 'fadeIn ease-in 0.7s';
    document.documentElement.scrollTop = 0;
    document.body.style.animation = 'fadeIn ease-in 0.7s';
}

// Cộng trừ
const AddEvent = function() {
        let listProductBtnAdd = $$('.product-quantity .btn-add')
        listProductBtnAdd.forEach(btn => {
            btn.onclick = function() {
                let quantity = Number.parseInt(
                    btn.parentElement.querySelector('input').value) + 1;
                btn.parentElement.querySelector('input').value = quantity;
            }
        })
        let listProductBtntru = $$('.product-quantity .btn-tru')
        listProductBtntru.forEach(btn => {
            btn.onclick = function() {
                let quantity = Number.parseInt(btn.parentElement.querySelector('input').value);
                if (quantity > 1)
                    btn.parentElement.querySelector('input').value = quantity - 1;
            }
        })
    }
    // Hiệu ứng trái tim bé nhỏ
const AddHeart = function() {
    let listProdctHeart = $$('.heart');
    listProdctHeart.forEach(heart => {
        heart.onclick = function(e) {
            e.stopPropagation();
            let wish = heart.dataset.wish == 1 ? true : false;
            wish = !wish;
            heart.dataset.wish = wish ? 1 : 0;
            heart.classList.toggle('active');
            ProductModel["updateWish"](heart.dataset.index, wish ? 1 : 0)
            console.log("loodader");
        }
    })

}