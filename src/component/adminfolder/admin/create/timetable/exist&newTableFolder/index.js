import React from 'react'

const Index = ({
  Table,
  setNewtimetable,
  Array,
  setId,
  newTimetable,
  Button,
  createTimetbale,
  ExistTable,
  state
}) => {
  return (
    <>
      {
        Array.length ? (
          <div 
            style={ Array.length !== 0? {
            border:'1px solid',
            display:'flex',
            flexWrap:"wrap",
            position:"relative",
            paddingTop:"50px",
            } : {border:'none'}} >
            <h5
                style={Array.length !== 0? {
                  position:"absolute",
                  left:'50%',
                  top:"5px",
                  transform:"translateX(-50%)"
                } : {display:"none"}}
              >new Table</h5>
            {<Table 
              setNewtimetable={setNewtimetable} 
              tableData={Array} 
              setId={setId}
              newTimetable={newTimetable}
              />}
              <Button
              style={{
                width:'90%',
                margin:"10px auto",
                border:"none",
                backgroundColor:"blue",
                color:"white",
                borderRadius:'10px'
              }}
              onClick={(e) => {
                e.preventDefault();
                createTimetbale(e);
              }}
            >
              save
            </Button>
          </div>
        ):(
          <></>
        )
      }
      {newTimetable.teacher_Id ? (
          <div 
          style={{
            border:'1px solid',
            display:'flex',
            flexWrap:"wrap",
            position:"relative",
            paddingTop:"50px"
          }}
        >
          <h5
            style={{
              position:"absolute",
              left:'50%',
              top:"5px",
              transform:"translateX(-50%)"
            }}
          >Existing Table</h5>
          <ExistTable
            teacher={newTimetable.teacher_Id}
            tableData={state.timetableReducer.table}
            setId={setId}
          />
          </div>
        ) : (
          <></>
        )}
    </>
  )
}

export default Index