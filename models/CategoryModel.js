const CategoryModel = {
    Initialize: function(){
        localStorage.setItem("categories", JSON.stringify(CATEGORIES));
    },
    UpdateAll : function(data){
        localStorage.setItem("categories", JSON.stringify(data));
    },
    Remove : function(id){
        let table = this.getAll();
        let result = table.filter((record) => record.id != id);
        this.UpdateAll(result)
        return result;
    },
    Insert : function(document){
        result = this.getAll();
        result.push(document);
        this.UpdateAll(result);
        return result;
    },
    getAll : function(){
        return JSON.parse(localStorage.getItem("categories"))
    },
    updateNameCategory : function(id, newNameCategory){
        const collection = this.getAll();
        let found = false;
        for (const document of collection) {
            if(document.id == id){
                found = true;
                if(document.name == newNameCategory){
                    return {status : false, message : language.vi.nothingChangeDocument};
                }else{
                    if (isExistRecord("categories", newNameCategory)) {
                        return {status : false, message : language.vi.existDocument};
                    }else{
                        document.name = newNameCategory;
                        this.UpdateAll(collection);
                        return {status : true, message : language.vi.updateSuccess};
                    }
                }                
            }
        }
        if(found == false){
            if(isExistRecord("categories", newNameCategory))
                return {status : false, message : language.vi.existDocument};
            this.Insert({id: id, name : newNameCategory})
            return {status : true, message : language.vi.createSuccess};
        }
    },
    getTotalPage : function(){
        return totalPageUser = this.getAll().length % LIMIT == 0 ? this.getAll().length / LIMIT :  (this.getAll().length / LIMIT) + 1
    },
    getDocumentsByPage : function(page) {
        return this.getAll().slice((page - 1)*LIMIT, page*LIMIT);
    }
}
if(CategoryModel.getAll() == null) CategoryModel.Initialize();