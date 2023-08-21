import * as React from "react";
import {
	AppBar,
	Box,
	Button,
	Container,
	Menu,
	MenuItem,
	Toolbar,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Link from "next/link";
import { pages } from "../../content/navigation";

function NavBar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const Page = ({ name, url, id }) => (
		<Button
			key={id}
			onClick={handleCloseNavMenu}
			sx={{ my: 2, color: "white", display: "block" }}
		>
			<Link href={`${url}`}>{name}</Link>
		</Button>
	);
	const MobilePage = ({ name, url, id }) => (
		<MenuItem key={id} onClick={handleCloseNavMenu}>
			<Link href={`${url}`}>
				<Typography textAlign="center">{name}</Typography>
			</Link>
		</MenuItem>
	);

	return (
		<AppBar position="static" sx={{ background: "#222" }}>
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<ShowChartIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
							textTransform: "uppercase",
						}}
					>
						McElhinney Accountancy
					</Typography>

					<Box
						sx={{
							flexGrow: 0,
							justifyContent: "flex-end",
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages?.map(MobilePage)}
						</Menu>
					</Box>
					<ShowChartIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
							textTransform: "uppercase",
						}}
					>
						McElhinney Accountancy
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							justifyContent: "flex-end",
						}}
					>
						{pages?.map(Page)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default NavBar;
