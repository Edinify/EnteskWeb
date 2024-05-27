import React, { useState, useEffect } from "react";
import Table from "./Table";
import { useSelector, useDispatch } from "react-redux";
import {
  searchByDateForTeacher,
  GetTeacherTable,
} from "../../../../reducer/crmRedux/action";
import Swal from "sweetalert2";
import Studentinfo from "./Studentinfo";

const Query = ({ ReturnParms }) => {
  const { Return, setReturn } = ReturnParms;
  const [Query, setQuery] = useState({
    from: "",
    to: "",
    state: 0,
    limit: 5,
    skip: 1,
  });
  const [id, setId] = useState(0);
  const [hideList, setHideList] = useState(true);
  const [CountDate, setCountDate] = useState("");
  const dispatch = useDispatch();
  const table = useSelector((state) => state.teachertable.table);
  const count = useSelector((state) => state.teachertable.count);
  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  // when page change get table and set default params
  useEffect(() => {
    if(Return === 0){
      setQuery({
        ...Query,
        from: "",
        to: "",
        limit: 5,
      })
      dispatch(GetTeacherTable(Query));
      setTimeout(() => {
        setHideList(true);
      }, 1000);
    }
    if (Query.skip === 1) {
      setCountDate(count);
    }
  }, [Return]);


  // for searching
  function search(e) {
    e.preventDefault();
    if (Query.from) {
      setQuery({
        ...Query,
        skip: 1
      });
      dispatch(searchByDateForTeacher(Query));
      setHideList(false);
      Toast.fire({
        icon: 'success',
        title: 'Loading ...'
      });
      setTimeout(() => {
        setReturn(1);
      }, 1500);

    } else {
      Swal.fire({
        color: "red",
        text: "please insert date",
      });
    }
  }


  const getLimit = () =>{
    dispatch(GetTeacherTable(Query));
  }

  const [tables, setTables] = useState([
  ]);

  useEffect(() => {
    const sortedAndUniqueTables = table
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .reduce((acc, table) => {
        if (!acc.some(item => item.name === table.name && item.date === table.date)) {
          acc.push(table);
        }
        return acc;
      }, []);
    setTables(sortedAndUniqueTables);
  }, [table]);

  return (
    <>
      <article className="Schedule-section">
        {Return >= 1 && table.length > 0 ? (
          <Table
            State={{ id, setId }}
            table={tables}
            ReturnParms={{ Return, setReturn }}
            count={count}
            Query={Query}
            setQuery={setQuery}
            dispatch={dispatch}
            searchByDateForTeacher={searchByDateForTeacher}
            number={1}
            getLimit={getLimit}
          />
        ) : (
          <>
            <form action="">
              <input
                type="date"
                onChange={(e) => {
                  let till = new Date(e.target.value);
                  setQuery({
                    ...Query,
                    from: e.target.value,
                    to: `${till.getFullYear()}-${till.getMonth() + 1}-${
                      till.getDate() + 1
                    }`,
                    // limit:5,
                    // skip:1
                  });
                }}
              />
              <button
                onClick={(e) => {
                  search(e);
                }}
              >
                Query
              </button>
            </form>
            {hideList && table.length > 0 && (
              <Table
              State={{ id, setId }}
              table={tables}
              ReturnParms={{ Return, setReturn }}
              count={count}
              Query={Query}
              setQuery={setQuery}
              dispatch={dispatch}
              searchByDateForTeacher={searchByDateForTeacher}
              number={2}
              getLimit={getLimit}
            />
            )}
          </>
        )}
      </article>
    </>
  );
};

export default Query;
