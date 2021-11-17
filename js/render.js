const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const renderContent = function() {

    var htmls = ProductModel.getDocumentsByPage(1).map((item) => {

        return `
        <li>
        <div class="product-items"></div>
        <div class="product-top">
            <a href="#" class="product-thumb">
                <img src="${item.imgList[0]}" alt="ảnh 1" width="200px" height="200px">
            </a>
           
            <!-- //Mua ngay -->
            <div class="buy-now">
            <div class="product-quantity">
                <button class="btn btn-tru"> - </button>
                <input type="text" min="1" max="99" value="1">
                <button class="btn btn-add"> + </button>
            </div>
                <div class="addtocart">
                    <p>ADD TO CART</p>
                </div>
            </div>
            <div class="heart ${item.wish ==1 && 'active'}" data-index="${item.id}" data-wish="${item.wish}">
            <i class="far fa-heart"></i>
            <i class="fas fa-heart"></i>
        </div>
        </div>
        <div class="product-info ">
            <a href="" class="product-cat">${item.category}</a>
            <a href="" class="product-name">${item.name}</a>
            <div class="product-price">${item.price}</div>
        </div>
    </li>      
     `
    })

    //console.log(htmls);
    document.getElementById('products').innerHTML = htmls;
    AddEvent();
    AddHeart();
}

var sortfilter = document.getElementById('slt');
sortfilter.addEventListener('change', filtersort);

function filtersort() {

    var valuefilter = sortfilter.value;
    console.log(valuefilter);
    var productsortA_Z = PRODUCTS.sort(function(a, b) {
        // Sản phẩm mới
        if (valuefilter === "Featured") {
            console.log("Chưa cập nhật sản phẩm mới!")
        }
        //Sếp xắp theo bảng chữ cái A_Z
        else if (valuefilter === "A-Z") {
            return a.name.localeCompare(b.name);
            //Sếp xắp theo bảng chữ cái Z_A
        } else if (valuefilter === "Z-A") {
            return b.name.localeCompare(a.name);
            //Sếp xắp theo giá từ thấp đến cao
        } else if (valuefilter === "lowtohigh") {
            return a.price - b.price;
            //Sếp xắp theo giá từ cao đến thấp
        } else if (valuefilter === "hightolow") {
            return b.price - a.price;
        }

    })
    var content = PRODUCTS.map(item => {
        return `
        <li>
    <div class="product-items"></div>
    <div class="product-top">
        <a href="#" class="product-thumb">
            <img src="${item.imgList[0]}" alt="ảnh 1" width="200px" height="200px">
        </a>
       
        <!-- //Mua ngay -->
        <div class="buy-now">
        <div class="product-quantity">
            <button class="btn btn-tru"> - </button>
            <input type="text" min="1" max="99" value="1">
            <button class="btn btn-add"> + </button>
        </div>
            <div class="addtocart">
                <p>ADD TO CART</p>
            </div>
        </div>
        <div class="heart ${item.wish ==1 && 'active'}" data-index="${item.id}" data-wish="${item.wish}">
        <i class="far fa-heart"></i>
        <i class="fas fa-heart"></i>
    </div>
    </div>
    <div class="product-info ">
        <a href="" class="product-cat">${item.category}</a>
        <a href="" class="product-name">${item.name}</a>
        <div class="product-price">${item.price}</div>
    </div>
</li>      
        `
    })
    document.getElementById("products").innerHTML = content;
    AddHeart();
    AddEvent();
    page_hide();
    filter_hide();
    //console.log(productsortA_Z);

}



const renderproducts = function() {

    document.getElementById("filterPC").onclick = function() {
        var htmlPC = PRODUCTS.map(items => {
            if (items.category == "PC") {
                return `
                <li class="liimg">
            <div class="product-items"></div>
            <div class="product-top">
                <a href="#" class="product-thumb">
                    <img src="${items.imgList[0]}" alt="ảnh 1" width="200px" height="200px">
                </a>
               
                <!-- //Mua ngay -->
                <div class="buy-now">
                <div class="product-quantity">
                    <button class="btn btn-tru"> - </button>
                    <input type="text" min="1" max="99" value="1">
                    <button class="btn btn-add"> + </button>
                </div>
                <div class="addtocart">
                        <p>ADD TO CART</p>
                    </div>
                </div>
                <div class="heart ${item.wish ==1 && 'active'}" data-index="${item.id}" data-wish="${item.wish}">
                <i class="far fa-heart"></i>
                <i class="fas fa-heart"></i>
                
                
            </div>
            </div>
            <div class="product-info ">
                <a href="" class="product-cat">${items.category}</a>
                <a href="" class="product-name">${items.name}</a>
                <div class="product-price">${items.price}</div>
            </div>
        </li>`
            }

        });
        document.getElementById("products").innerHTML = htmlPC.join(" ");

        console.log(htmlPC);
        AddEvent();
        AddHeart();
        filter_hide();
        page_hide();


    }
    document.getElementById("filterlaptop").onclick = function() {
        var htmllaptop = PRODUCTS.map(item => {
            if (item.category == "Laptop") {
                return `
                <li>
            <div class="product-items"></div>
            <div class="product-top">
                <a href="#" class="product-thumb">
                    <img src="${item.imgList[0]}" alt="ảnh 1" width="200px" height="200px">
                </a>
               
                <!-- //Mua ngay -->
                <div class="buy-now">
                <div class="product-quantity">
                    <button class="btn btn-tru"> - </button>
                    <input type="text" min="1" max="99" value="1">
                    <button class="btn btn-add"> + </button>
                </div>
                <div class="addtocart">
                        <p>ADD TO CART</p>
                    </div>
                </div>
                <div class="heart ${item.wish ==1 && 'active'}" data-index="${item.id}" data-wish="${item.wish}">
                <i class="far fa-heart"></i>
                <i class="fas fa-heart"></i>
                
                
            </div>
            </div>
            <div class="product-info ">
                <a href="" class="product-cat">${item.category}</a>
                <a href="" class="product-name">${item.name}</a>
                <div class="product-price">${item.price}</div>
            </div>
        </li>`
            }

        });

        document.getElementById("products").innerHTML = htmllaptop.join(" ");

        console.log(htmllaptop);
        AddEvent();
        AddHeart();
        filter_hide();
        page_hide();

    }
    document.getElementById("filterMouse").onclick = function() {
        var htmlMouse = PRODUCTS.map(item => {
            if (item.category == "Mouse") {
                return `
                <li>
            <div class="product-items"></div>
            <div class="product-top">
                <a href="#" class="product-thumb">
                    <img src="${item.imgList[0]}" alt="ảnh 1" width="200px" height="200px">
                </a>
               
                <!-- //Mua ngay -->
                <div class="buy-now">
                <div class="product-quantity">
                    <button class="btn btn-tru"> - </button>
                    <input type="text" min="1" max="99" value="1">
                    <button class="btn btn-add"> + </button>
                </div>
                <div class="addtocart">
                        <p>ADD TO CART</p>
                    </div>
                </div>
                <div class="heart ${item.wish ==1 && 'active'}" data-index="${item.id}" data-wish="${item.wish}">
                <i class="far fa-heart"></i>
                <i class="fas fa-heart"></i>
                
                
            </div>
            </div>
            <div class="product-info ">
                <a href="" class="product-cat">${item.category}</a>
                <a href="" class="product-name">${item.name}</a>
                <div class="product-price">${item.price}</div>
            </div>
        </li>`
            }

        });

        document.getElementById("products").innerHTML = htmlMouse.join(" ");

        console.log(htmlMouse);
        AddEvent();
        AddHeart();
        filter_hide();
        page_hide();
    }
    document.getElementById("filterHeadphone").onclick = function() {
        var htmlHeadphone = PRODUCTS.map(item => {
            if (item.category == "Headphone") {
                return `
                <li>
            <div class="product-items"></div>
            <div class="product-top">
                <a href="#" class="product-thumb">
                    <img src="${item.imgList[0]}" alt="ảnh 1" width="200px" height="200px">
                </a>
               
                <!-- //Mua ngay -->
                <div class="buy-now">
                <div class="product-quantity">
                    <button class="btn btn-tru"> - </button>
                    <input type="text" min="1" max="99" value="1">
                    <button class="btn btn-add"> + </button>
                </div>
                <div class="addtocart">
                        <p>ADD TO CART</p>
                    </div>
                </div>
                <div class="heart ${item.wish ==1 && 'active'}" data-index="${item.id}" data-wish="${item.wish}">
                <i class="far fa-heart"></i>
                <i class="fas fa-heart"></i>
                
                
            </div>
            </div>
            <div class="product-info ">
                <a href="" class="product-cat">${item.category}</a>
                <a href="" class="product-name">${item.name}</a>
                <div class="product-price">${item.price}</div>
            </div>
        </li>`
            }

        });

        document.getElementById("products").innerHTML = htmlHeadphone.join(" ");

        console.log(htmlHeadphone);
        AddEvent();
        AddHeart();
        filter_hide();
        page_hide();
    }
    document.getElementById('filterrange').onclick = function() {
        //console.log("ClickedRange");
        let pricevalue = Number.parseInt(document.getElementById("myRange").value);
        console.log(pricevalue);
        var htmlprice = PRODUCTS.map(item => {
            if (item.price <= pricevalue) {
                return `
                <li>
            <div class="product-items"></div>
            <div class="product-top">
                <a href="#" class="product-thumb">
                    <img src="${item.imgList[0]}" alt="ảnh 1" width="200px" height="200px">
                </a>
               
                <!-- //Mua ngay -->
                <div class="buy-now">
                <div class="product-quantity">
                    <button class="btn btn-tru"> - </button>
                    <input type="text" min="1" max="99" value="1">
                    <button class="btn btn-add"> + </button>
                </div>
                <div class="addtocart">
                        <p>ADD TO CART</p>
                    </div>
                </div>
                <div class="heart ${item.wish ==1 && 'active'}" data-index="${item.id}" data-wish="${item.wish}">
                <i class="far fa-heart"></i>
                <i class="fas fa-heart"></i>
                
                
            </div>
            </div>
            <div class="product-info ">
                <a href="" class="product-cat">${item.category}</a>
                <a href="" class="product-name">${item.name}</a>
                <div class="product-price">${item.price}</div>
            </div>
        </li>`
            }

        });

        document.getElementById("products").innerHTML = htmlprice.join(" ");

        console.log(htmlprice);
        AddEvent();
        AddHeart();
        filter_hide();
        page_hide();


    }
    document.getElementById('filtertitle').onclick = function() {
        console.log("Clicked");

        let title = document.getElementById('search').value;
        const filterdata = PRODUCTS.filter(value => {
            return value.name.toUpperCase().includes(title.toUpperCase());
        })
        var htmltitle = filterdata.map(item => {

            return `
                <li>
            <div class="product-items"></div>
            <div class="product-top">
                <a href="#" class="product-thumb">
                    <img src="${item.imgList[0]}" alt="ảnh 1" width="200px" height="200px">
                </a>
               
                <!-- //Mua ngay -->
                <div class="buy-now">
                <div class="product-quantity">
                    <button class="btn btn-tru"> - </button>
                    <input type="text" min="1" max="99" value="1">
                    <button class="btn btn-add"> + </button>
                </div>
                <div class="addtocart">
                        <p>ADD TO CART</p>
                    </div>
                </div>
                <div class="heart ${item.wish ==1 && 'active'}" data-index="${item.id}" data-wish="${item.wish}">
                <i class="far fa-heart"></i>
                <i class="fas fa-heart"></i>
                
                
            </div>
            </div>
            <div class="product-info ">
                <a href="" class="product-cat">${item.category}</a>
                <a href="" class="product-name">${item.name}</a>
                <div class="product-price">${item.price}</div>
            </div>
        </li>`


        });

        let filter = document.getElementById("filter");
        filter.style.display = 'none';
        document.body.style.animation = 'fadeIn ease-in 0.7s ';
        document.getElementById("products").innerHTML = htmltitle.join(" ");
        let chuyentrang = document.getElementById('chuyentrang')
        console.log(htmltitle);
        AddEvent();
        AddHeart();
        filter_hide();
        page_hide();

    }

}

function taotrang() {
    let pageNumber = ProductModel.getTotalPage();
    //console.log(pageNumber);
    var s = "";
    for (var i = 1; i <= pageNumber; i++) {
        var a = '<a href="index.html#' + i + '"class="trangn" >' + i + '</a>';
        s = s + a;
        //console.log(renderdata());
    }
    //console.log(s);
    document.getElementById("chuyentrang").innerHTML = s;
    addpage();
}

function addpage() {
    $$('.trangn').forEach(element => {
        element.onclick = function() {
            var x = Number(element.textContent);
            renderdata(x);
        }
    });
}

function renderdata(x) {
    var htmls = ProductModel.getDocumentsByPage(x).map((item) => {

            return `
        <li>
        <div class="product-items"></div>
        <div class="product-top">
            <a href="#" class="product-thumb">
                <img src="${item.imgList[0]}" alt="ảnh 1" width="200px" height="200px">
            </a>
           
            <!-- //Mua ngay -->
            <div class="buy-now">
            <div class="product-quantity">
                <button class="btn btn-tru"> - </button>
                <input type="text" min="1" max="99" value="1">
                <button class="btn btn-add"> + </button>
            </div>
                <div class="addtocart">
                    <p>ADD TO CART</p>
                </div>
            </div>
            <div class="heart ${item.wish ==1 && 'active'}" data-index="${item.id}" data-wish="${item.wish}">
            <i class="far fa-heart"></i>
            <i class="fas fa-heart"></i>
        </div>
        </div>
        <div class="product-info ">
            <a href="" class="product-cat">${item.category}</a>
            <a href="" class="product-name">${item.name}</a>
            <div class="product-price">${item.price}</div>
        </div>
    </li>      
     `
        })
        //console.log(htmls);
    document.getElementById('products').innerHTML = htmls;
    AddEvent();
    AddHeart();
}
window.onload = function() {
    renderContent();
    renderproducts();
    taotrang();
}