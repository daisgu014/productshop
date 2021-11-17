const ProductModel = {
    Initialize: function() {
        localStorage.setItem("products", JSON.stringify(PRODUCTS));
    },
    UpdateAll: function(data) {
        localStorage.setItem("products", JSON.stringify(data));
    },
    Remove: function(id) {
        let table = this.getAll();
        let result = table.filter((record) => record.id != id);
        this.UpdateAll(result);
        return result;
    },

    getAll: function() {
        return JSON.parse(localStorage.getItem("products"));
    },
    Insert: function(document) {
        result = this.getAll();
        result.push(document);
        this.UpdateAll(result);
        return result;
    },
    updateProduct: function(id, product) {
        const collection = this.getAll();
        let found = false;
        for (let document of collection) {
            if (document.id == id) {
                found = true;
                if (
                    product.name == document.name &&
                    product.price == document.price &&
                    product.category == document.category
                ) {
                    return { status: false, message: language.vi.nothingChangeDocument }

                } else {
                    // modify but  modify another not name product
                    if (product.name != document.name) {
                        if (!isExistRecord("products", product.name)) {
                            document.id = id;
                            document.name = product.name;
                            document.price = product.price;
                            document.category = product.category
                            document.rate = product.rate;
                            this.UpdateAll(collection);
                            return { status: true, message: language.vi.updateSuccess };
                        } else {
                            return { status: false, message: language.vi.existDocument };
                        }
                    } else {
                        document.id = id;
                        document.name = product.name;
                        document.price = product.price;
                        document.category = product.category
                        document.rate = product.rate;
                        this.UpdateAll(collection);
                        return { status: true, message: language.vi.updateSuccess };

                    }
                }
            }
        }

        if (found == false) {
            if (isExistRecord("products", product.name))
                return { status: false, message: language.vi.existDocument };
            this.Insert({ id: id, ...product })
            return { status: true, message: language.vi.createSuccess };
        }
    },
    getTotalPage: function() {
        return totalPageUser = this.getAll().length % LIMIT == 0 ? this.getAll().length / LIMIT : (this.getAll().length / LIMIT) + 1
    },
    getDocumentsByPage: function(page) {
        return this.getAll().slice((page - 1) * LIMIT, page * LIMIT);
    },
    updateWish: function(id, wish) {
        const collection = this.getAll();
        for (let document of collection) {
            if (document.id == id) {
                document.wish = wish;
            }
        }
        this.UpdateAll(collection)
    }
};

if (ProductModel.getAll() == null) ProductModel.Initialize();