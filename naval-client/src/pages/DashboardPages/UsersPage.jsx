import { forwardRef, useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LockIcon from "@mui/icons-material/Lock";
import BadgeIcon from "@mui/icons-material/Badge";

// API
import { fetchUsers, createUser, updateUser } from "../../services/UserService.js";
import { TableVirtuoso } from "react-virtuoso";

const types = ["admin", "editor", "viewer"];
const genders = ["male", "female", "other"];
const statuses = ["active", "inactive"];
const usersPalette = {
  lilac: "#DCC9E5",
  white: "#FFFFFF",
  text: "#3E2C41",
};

const cardSx = {
  borderRadius: "24px",
  border: `1px solid ${usersPalette.lilac}`,
  backgroundColor: usersPalette.white,
  boxShadow: "0 16px 40px rgba(90, 42, 110, 0.08)",
};

const primaryButtonSx = {
  borderRadius: "999px",
  height: 36,
  minHeight: 36,
  maxHeight: 36,
  px: 2,
  py: 0,
  backgroundColor: "success.main",
  color: usersPalette.white,
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  lineHeight: 1,
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  boxShadow: "0 10px 22px rgba(46, 125, 50, 0.28)",
  "&:hover": {
    backgroundColor: "success.dark",
    boxShadow: "0 12px 26px rgba(46, 125, 50, 0.32)",
  },
};

const addUserButtonSx = {
  ...primaryButtonSx,
  backgroundColor: "success.main",
  boxShadow: "0 10px 22px rgba(46, 125, 50, 0.28)",
  "&:hover": {
    backgroundColor: "success.dark",
    boxShadow: "0 12px 26px rgba(46, 125, 50, 0.32)",
  },
};

const outlinedButtonSx = {
  borderRadius: "999px",
  borderColor: "warning.main",
  color: "warning.main",
  fontWeight: 700,
  "&:hover": {
    borderColor: "warning.dark",
    backgroundColor: "rgba(237, 108, 2, 0.08)",
  },
};

const filterButtonSx = {
  ...outlinedButtonSx,
  px: 2.5,
  py: 1,
  fontSize: "0.78rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

const textFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    backgroundColor: usersPalette.white,
    "& fieldset": {
      borderColor: usersPalette.lilac,
    },
    "&:hover fieldset": {
      borderColor: usersPalette.lilac,
    },
    "&.Mui-focused fieldset": {
      borderColor: usersPalette.lilac,
    },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: usersPalette.text,
  },
};

const blankForm = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  type: "viewer", // Changed to "type" to match API
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "";

const tableColumns = [
  { width: 70, label: "ID", dataKey: "id" },
  { width: 170, label: "Full Name", dataKey: "fullName" },
  { width: 150, label: "Username", dataKey: "username" },
  { width: 90, label: "Age", dataKey: "age", numeric: true },
  { width: 120, label: "Gender", dataKey: "gender" },
  { width: 170, label: "Contact Number", dataKey: "contactNumber" },
  { width: 240, label: "Email", dataKey: "email" },
  { width: 130, label: "Type", dataKey: "type" },
  { width: 130, label: "Status", dataKey: "status" },
  { width: 220, label: "Actions", dataKey: "actions" },
];

const VirtuosoScroller = forwardRef(function VirtuosoScroller(props, ref) {
  return <TableContainer component={Paper} {...props} ref={ref} />;
});

function VirtuosoTable(props) {
  return (
    <Table
      {...props}
      sx={{
        borderCollapse: "separate",
        tableLayout: "fixed",
        minWidth: 0,
        "& .MuiTableCell-head": {
          backgroundColor: usersPalette.white,
          color: usersPalette.text,
          fontWeight: 700,
        },
      }}
    />
  );
}

const VirtuosoTableHead = forwardRef(function VirtuosoTableHead(props, ref) {
  return <TableHead {...props} ref={ref} />;
});

const VirtuosoTableBody = forwardRef(function VirtuosoTableBody(props, ref) {
  return <TableBody {...props} ref={ref} />;
});

const VirtuosoTableComponents = {
  Scroller: VirtuosoScroller,
  Table: VirtuosoTable,
  TableHead: VirtuosoTableHead,
  TableRow,
  TableBody: VirtuosoTableBody,
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {tableColumns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric ? "right" : "left"}
          style={{ width: column.width }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  // States
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  
  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const loadUsersData = async () => {
    try {
      setLoading(true);
      const { data } = await fetchUsers();
      setUsers(data.users || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsersData();
  }, []);

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?._id ?? null });
    // If editing, blank out the password so they only set it if they want to change it
    setForm(user ? { ...blankForm, ...user, password: "" } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    const email = (form.email || "").trim().toLowerCase();
    const username = (form.username || "").trim().toLowerCase();

    [
      ["firstName", "First name"],
      ["lastName", "Last name"],
      ["age", "Age"],
      ["gender", "Gender"],
      ["contactNumber", "Contact number"],
      ["email", "Email"],
      ["type", "Type"],
      ["username", "Username"],
      ["address", "Address"],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    // Password validation - only required if it's a new user OR if they typed something while editing
    if (!modal.id && (!form.password || form.password.length < 8)) {
      nextErrors.password = "Password must be at least 8 characters.";
    } else if (modal.id && form.password && form.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!nextErrors.age && !/^\d+$/.test(String(form.age).trim())) {
      nextErrors.age = "Age must be a number only.";
    }

    if (!nextErrors.contactNumber && !/^\d{11}$/.test(String(form.contactNumber).trim())) {
      nextErrors.contactNumber = "Contact number must be exactly 11 digits.";
    }

    if (!nextErrors.username && /\s/.test(username)) {
      nextErrors.username = "Username must not contain spaces.";
    }

    if (!nextErrors.email && users.some((user) => user._id !== modal.id && user.email === email)) {
      nextErrors.email = "Email address already exists.";
    }

    if (!nextErrors.username && users.some((user) => user._id !== modal.id && user.username === username)) {
      nextErrors.username = "Username already exists.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    try {
      const payload = { ...form };
      if (modal.id) {
        // Remove password if it was left blank during edit
        if (!payload.password) delete payload.password;
        await updateUser(modal.id, payload);
      } else {
        await createUser(payload);
      }
      loadUsersData();
      closeModal();
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      await updateUser(id, { isActive: !currentStatus });
      loadUsersData();
    } catch (error) {
      console.error("Error toggling status:", error);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setTypeFilter("");
    setGenderFilter("");
    setStatusFilter("");
  };

  const filteredUsers = users.filter((user) => {
    const searchValue = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !searchValue ||
      [user.firstName, user.lastName, user.email, user.username].some((value) =>
        String(value).toLowerCase().includes(searchValue),
      );
    const matchesType = !typeFilter || user.type === typeFilter;
    const matchesGender = !genderFilter || user.gender === genderFilter;
    const matchesStatus =
      !statusFilter ||
      (statusFilter === "active" ? user.isActive : !user.isActive);

    return matchesSearch && matchesType && matchesGender && matchesStatus;
  });

  // Reusable prop generator for TextFields, easily adding Start Icons
  const fieldProps = (name, label, IconComponent, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    sx: textFieldSx,
    InputProps: {
      startAdornment: IconComponent && (
        <InputAdornment position="start">
          <IconComponent sx={{ color: usersPalette.lilac }} />
        </InputAdornment>
      ),
      ...extra.InputProps,
    },
    ...extra,
  });

  const rowContent = (index, row) => (
    <>
      <TableCell sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
         {row._id ? row._id.slice(-4).toUpperCase() : index + 1}
      </TableCell>
      <TableCell>{`${row.firstName} ${row.lastName}`.trim()}</TableCell>
      <TableCell>{row.username}</TableCell>
      <TableCell align="right">{row.age}</TableCell>
      <TableCell>{labelize(row.gender)}</TableCell>
      <TableCell>{row.contactNumber}</TableCell>
      <TableCell>{row.email}</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>{labelize(row.type)}</TableCell>
      <TableCell>
        <Chip
          size="small"
          label={row.isActive ? "Active" : "Inactive"}
          color={row.isActive ? "success" : "warning"}
          variant="filled"
          sx={{ fontWeight: 700 }}
        />
      </TableCell>
      <TableCell>
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button
            size="small"
            variant="outlined"
            color="warning"
            onClick={() => openModal(row)}
            sx={{ borderRadius: "999px", fontWeight: 700 }}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color={row.isActive ? "warning" : "success"}
            onClick={() => toggleStatus(row._id, row.isActive)}
            sx={{ borderRadius: "999px", fontWeight: 700, boxShadow: "none" }}
          >
            {row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      </TableCell>
    </>
  );

  return (
    <Stack spacing={3} sx={{ width: "100%", minWidth: 0 }}>
      <Card sx={{ ...cardSx, backgroundColor: usersPalette.white }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", md: "flex-start" }}
            spacing={3}
            sx={{ width: "100%" }}
          >
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="h4"
                sx={{
                  mt: 1.5,
                  color: usersPalette.text,
                  fontWeight: 700,
                }}
              >
                User directory and access control
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() => openModal()}
              sx={{
                ...addUserButtonSx,
                ml: { md: "auto" },
                flexShrink: 0,
                alignSelf: { xs: "flex-start", md: "flex-start" },
              }}
            >
              Add User
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Card sx={{ ...cardSx, minWidth: 0, overflow: "hidden" }}>
        <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
          <Stack spacing={2} sx={{ mb: 2 }}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", lg: "center" }}
            >
              <TextField
                label="Search users"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search first name, last name, email, or username"
                sx={{ ...textFieldSx, flex: 1.5 }}
              />
              <TextField
                label="Type"
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value)}
                select
                sx={{ ...textFieldSx, flex: 1 }}
              >
                <MenuItem value="">All Types</MenuItem>
                {types.map((type) => (
                  <MenuItem key={type} value={type}>
                    {labelize(type)}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Gender"
                value={genderFilter}
                onChange={(event) => setGenderFilter(event.target.value)}
                select
                sx={{ ...textFieldSx, flex: 1 }}
              >
                <MenuItem value="">All Genders</MenuItem>
                {genders.map((gender) => (
                  <MenuItem key={gender} value={gender}>
                    {labelize(gender)}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Status"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value)}
                select
                sx={{ ...textFieldSx, flex: 1 }}
              >
                <MenuItem value="">All Statuses</MenuItem>
                {statuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {labelize(status)}
                  </MenuItem>
                ))}
              </TextField>
              <Button
                variant="outlined"
                onClick={clearFilters}
                sx={{ ...filterButtonSx, alignSelf: { lg: "stretch" } }}
              >
                Clear
              </Button>
            </Stack>

            <Typography sx={{ color: usersPalette.text, opacity: 0.75 }}>
              Showing {filteredUsers.length} of {users.length} users
            </Typography>
          </Stack>

          {loading ? (
             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
               <CircularProgress sx={{ color: usersPalette.lilac }} />
             </Box>
          ) : users.length ? (
            <Paper
              sx={{
                height: { xs: 460, sm: 520 },
                width: "100%",
                minWidth: 0,
                overflow: "hidden",
                border: `1px solid ${usersPalette.lilac}`,
                borderRadius: "16px",
              }}
            >
              <TableVirtuoso
                data={filteredUsers}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
              />
            </Paper>
          ) : (
            <Alert severity="info">
              No users found. Use Add User to create your first record.
            </Alert>
          )}

          {!loading && users.length > 0 && !filteredUsers.length ? (
            <Alert
              severity="info"
              sx={{
                mt: 2,
                borderRadius: "14px",
                backgroundColor: usersPalette.white,
                color: usersPalette.text,
              }}
            >
              No users match the current search or filters.
            </Alert>
          ) : null}
        </CardContent>
      </Card>

      {/* Modal Form */}
      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, sm: "24px" },
            border: { xs: 0, sm: `1px solid ${usersPalette.lilac}` },
            boxShadow: "0 18px 46px rgba(90, 42, 110, 0.16)",
          },
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle
            sx={{
              backgroundColor: usersPalette.white,
              color: usersPalette.text,
              fontWeight: 700,
            }}
          >
            {modal.id ? "Edit User" : "Add User"}
          </DialogTitle>

          <DialogContent
            dividers
            sx={{
              px: { xs: 2, sm: 3 },
              borderColor: usersPalette.lilac,
              backgroundColor: usersPalette.white,
            }}
          >
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("firstName", "First Name", PersonIcon)} />
                <TextField {...fieldProps("lastName", "Last Name", PersonIcon)} />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("age", "Age", CakeIcon)} />
                <TextField {...fieldProps("gender", "Gender", WcIcon, { select: true })}>
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("contactNumber", "Contact Number", PhoneIcon)} />
                <TextField {...fieldProps("email", "Email Address", EmailIcon, { type: "email" })} />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("type", "Type", BadgeIcon, { select: true })}>
                  {types.map((type) => (
                    <MenuItem key={type} value={type}>
                      {labelize(type)}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField {...fieldProps("username", "Username", AssignmentIndIcon)} />
              </Stack>

              <TextField
                {...fieldProps("password", "Password", LockIcon, {
                  type: showPassword ? "text" : "password",
                  InputProps: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={() => setShowPassword((prev) => !prev)}
                          onMouseDown={(event) => event.preventDefault()}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                })}
              />

              <TextField
                {...fieldProps("address", "Address", HomeIcon, {
                  multiline: true,
                  rows: 3,
                })}
              />

              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "success.main",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        backgroundColor: "success.light",
                      },
                    }}
                  />
                }
                label={form.isActive ? "User status: Active" : "User status: Inactive"}
              />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ px: 3, py: 2, backgroundColor: usersPalette.white }}>
            <Button onClick={closeModal} sx={outlinedButtonSx}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" sx={primaryButtonSx}>
              {modal.id ? "Update User" : "Save User"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Stack>
  );
};

export default UsersPage;