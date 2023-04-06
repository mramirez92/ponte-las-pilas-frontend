import { 
    Button,
    Popover,
    PopoverContent,
    PopoverHandler,
  } from "@material-tailwind/react"
  import React from "react"
  
  export default function EnglishButton(props){
    const [openPopover, setOpenPopover] = React.useState(false);
    const triggers = {
      onMouseEnter: () => setOpenPopover(true),
      onMouseLeave: () => setOpenPopover(false),
    };
  
    return(
      <>
        <Popover 
          open={openPopover} 
          handler={setOpenPopover}
          placement="bottom" 
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 5 },
          }}
        >
          <PopoverHandler {...triggers}>
            <Button className="group/item outline-none hover:italic">
              English
            </Button>
          </PopoverHandler>
          <PopoverContent className="outline-none">
            <p className="text-slate-100">{props.quote.translation}</p>
          </PopoverContent>
        </Popover>
        
      </>
    )
  }
  
