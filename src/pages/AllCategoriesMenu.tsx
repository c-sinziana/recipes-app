import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { AxiosRequestConfig } from "axios";
import useFetchData from "../hooks/useFetchData";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export default function AllCategoriesMenu() {
  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const categoriesRequest: AxiosRequestConfig = {
    url: `/products/categories`,
    method: "get",
  };

  const [{ data: categories, loading, error }] = useFetchData(
    categoriesRequest,
    true
  );

  return (
    <Box
      sx={{ display: "flex", flexDirection: "coulm", justifyContent: "center" }}
    >
      <Stack>
        <div>
          <Button
            ref={anchorRef}
            onClick={handleToggle}
            variant="contained"
            color="error"
            size="small"
          >
            Categories
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            placement="bottom-start"
            transition
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      onKeyDown={handleListKeyDown}
                    >
                      {categories.map((category: any) => (
                        <MenuItem key={category} onClick={handleClose}>
                          <Button
                            variant="contained"
                            color="error"
                            sx={{ marginBottom: "3%" }}
                            onClick={() =>
                              navigate(`products/?category=${category}`)
                            }
                          >
                            {category}
                          </Button>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </Box>
  );
}
