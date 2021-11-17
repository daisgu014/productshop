const UserModel = {
  Initialize: function () {
    localStorage.setItem("users", JSON.stringify(USERS));
  },
  UpdateAll: function (data) {
    localStorage.setItem("users", JSON.stringify(data));
  },
  Remove: function (id) {
    let table = this.getAll();
    let result = table.filter((record) => record.id != id);
    console.log(result)
    this.UpdateAll(result);
    console.log(this.getAll())
    return result;
  },
  Insert: function (document) {
    result = this.getAll();
    result.push(document);
    this.UpdateAll(result);
    return result;
  },
  getAll: function () {
    return JSON.parse(localStorage.getItem("users"));
  },
  updateUser: function (id, user) {
    const collection = this.getAll();
    let found = false;
    user = { id: id, ...user };
    for (const document of collection) {
      if (document.id == id) {
        found = true;
        console.log(user,document);
        if (
          user.username == document.username &&
          user.isAdmin == document.isAdmin
        )
          return {
            status: false,
            message: language.vi.nothingChangeDocument,
          };
        else {
          // modify but modify another not username
          if (user.username != document.username) {
            if (!isExistRecord("users", user.username)) {
              document.isAdmin = user.isAdmin;
              document.username = user.username;
              this.UpdateAll(collection);
              return {
                status: true,
                message: language.vi.updateSuccess,
              };
            } else {
              return {
                status: false,
                message: language.vi.existDocument,
              };
            }
          } else {
            document.isAdmin = user.isAdmin;
            document.username = user.username;
            this.UpdateAll(collection);
            return {
              status: true,
              message: language.vi.updateSuccess,
            };
          }
        }
      }
    }
    if (found == false) {
      if (isExistRecord("users", user.username))
        return { status: false, message: language.vi.existDocument };
      this.Insert({ id: id, ...user });
      return { status: true, message: language.vi.createSuccess };
    }
  },
  getTotalPage: function () {
    return (totalPageUser =
      this.getAll().length % LIMIT == 0
        ? this.getAll().length / LIMIT
        : this.getAll().length / LIMIT + 1);
  },
  getDocumentsByPage: function (page) {
    return this.getAll().slice((page - 1) * LIMIT, page * LIMIT);
  },
};
if(UserModel.getAll() == null) UserModel.Initialize();