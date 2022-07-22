import ItemDetail from './ItemDetail';
import data from "../Data/apidetails.json";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import Spinner from '../Spinner/Spinner';


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const promise = new Promise((res, rej) => {
    setTimeout(() => res(data), 2000);
  });

  useEffect( () => {
    setLoading(true);
    promise.then((response) => {
      const foundItem = response.filter((item )=> item.id == params.id);
      setItem(foundItem[0]);
      setLoading(false);
    })
  }, []);

  return loading ? <Spinner /> : <ItemDetail item={item} />;
};

export default ItemDetailContainer;
