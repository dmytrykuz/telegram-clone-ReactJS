import express from "express";
import { UserModel } from "../schemes";

class UserController {

  show(req: express.Request, res: express.Response) {
    const id: string = req.params.id;

    UserModel.findById(id, (err: any, user: any) => {
      if (err) {
        return res.status(404).json({
          message: "User not found",
        })
      }
      res.json(user);
    })
  }

  getMe() {
    // повернути інфу про себе
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.email,
      fullname: req.body.fullname,
      password: req.body.password
    }

    const user = new UserModel(postData);

    user.save().then((obj: any) => {
      res.json(obj)
    }).catch(reason => {
      res.json(reason);
    });
  }

  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;

    UserModel.findOneAndRemove({ _id: id })
      .then((user: any) => {
        if (user) {
          res.json({
            message: `User ${user.fullname} deleted`,
          });
        }
      })
      .catch((err: any) => {
        res.json({
          message: err
        })
      })
  }
};

export default UserController;
