import { 
    Button,
    Popover,
    PopoverContent,
    PopoverHandler,
  } from "@material-tailwind/react"
  import React from "react"
  
  export default function LiteralButton(props){
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
            <Button className="group/item outline-none text-slate-200/50 group-hover/quote:text-slate-200 border-none">
              Literal
            </Button>
          </PopoverHandler>
          <PopoverContent className="outline-none">
            <p className="text-slate-100">placeholder for future literal translation</p>
          </PopoverContent>
        </Popover>
    </>
)
  }
  
