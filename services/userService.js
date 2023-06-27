import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  getUsers() {
    const users = userRepository.getAll();
    if (!users){
      return null;
    }
    return user;
  }

  createUser(data){
    const user = userRepository.create(data);
    if (!user){
      return null;
    }
    return user;
  }

  updateUser(id, dataToUpdate){
    const user = userRepository.update(id, dataToUpdate);
    if (!user){
      return null;
    }
    return user;
  }

  deleteUser(id){
    const user = userRepository.delete(id);
    if (!user){
      return null;
    }
    return user;
  }

  search(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }
}

const userService = new UserService();

export { userService };
