import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  getFighters() {
    const fighters = userRepository.getAll();
    if (!fighters){
      return null;
    }
    return fighter;
  }

  getFighter(search){
    const fighter = userRepository.getOne(search);
    if (!fighter){
      return null;
    }
    return fighter;
  }

  createFighter(data){
    const fighter = userRepository.create(data);
    if (!fighter){
      return null;
    }
    return fighter;
  }

  updateFighter(id, dataToUpdate){
    const fighter = userRepository.update(id, dataToUpdate);
    if (!fighter){
      return null;
    }
    return fighter;
  }

  deleteFighter(id){
    const fighter = userRepository.delete(id);
    if (!fighter){
      return null;
    }
    return fighter;
  }
}

const fighterService = new FighterService();

export { fighterService };
