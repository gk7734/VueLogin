"use strict";

const users = {
    id: ["gk", "gamekiller", "sgk"],
    pwd: ["1234", "1234", "123"],
};

const output = {
    home: (req, res) =>{
        res.render("home/index");
    },
    login: (req, res) =>{
        res.render("home/login")
    }
};

const process = {
    login: (req, res) =>{
        const id = req.body.id,
         pwd = req.body.pwd;
      if (users.id.includes(id)) {
          const idx = users.id.indexOf(id);
          if (users.pwd[idx] === pwd) {
              return res.json({
                  success: true,
              });
          }
      }
      return res.json({
          success: false,
          msg: "로그인 실패하셨습니다.",
      });
    },
};

module.exports = {
    output,
    process,
};