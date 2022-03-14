import { v4 as uuidv4 } from 'uuid';
import { ObjectItem } from '../../models/dbm/object';
import { IObjectsRepository } from './interfaces';
import DBConnector from './connector';

class ObjectRepository implements IObjectsRepository {
  getList = async () => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .find();
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  getObject = async (id: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .findOne({ where: { id } });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  createObject = async (
    img: string,
    name: string,
    region: string,
    text: string,
    rate: number
  ) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .save({ img, name, region, text, rate });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  getObjectByName = async (name: string) => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .findOne({ where: { name } });
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  };
  getObjectsByQuery = async () => {
    try {
      const response = await DBConnector.connector
        ?.getRepository(ObjectItem)
        .find();
      return { value: response };
    } catch (e) {
      return { error: e };
    }
  }
}
export default new ObjectRepository();
