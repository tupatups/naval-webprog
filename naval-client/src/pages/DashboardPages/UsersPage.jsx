import { forwardRef, useState } from "react";
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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TableVirtuoso } from "react-virtuoso";
import usersSeed from "../../data/users.json?raw";

const roles = ["admin", "editor", "viewer"];
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
  role: "editor",
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "";

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? "").trim(),
        lastName: String(user.lastName ?? "").trim(),
        age: String(user.age ?? "").trim(),
        gender: genders.includes(
          String(user.gender ?? "")
            .trim()
            .toLowerCase(),
        )
          ? String(user.gender ?? "")
              .trim()
              .toLowerCase()
          : "",
        contactNumber: String(user.contactNumber ?? "").trim(),
        email: String(user.email ?? "")
          .trim()
          .toLowerCase(),
        role: roles.includes(
          String(user.role ?? "")
            .trim()
            .toLowerCase(),
        )
          ? String(user.role ?? "")
              .trim()
              .toLowerCase()
          : "editor",
        username: String(user.username ?? "")
          .trim()
          .toLowerCase(),
        password: String(user.password ?? ""),
        address: String(user.address ?? "").trim(),
        isActive: typeof user.isActive === "boolean" ? user.isActive : true,
      })),
      error: "",
    };
  } catch {
    return {
      users: [],
      error: "Unable to read users from src/data/users.json.",
    };
  }
};

const seed = loadUsers();

const tableColumns = [
  { width: 70, label: "ID", dataKey: "id" },
  { width: 170, label: "Full Name", dataKey: "fullName" },
  { width: 150, label: "Username", dataKey: "username" },
  { width: 90, label: "Age", dataKey: "age", numeric: true },
  { width: 120, label: "Gender", dataKey: "gender" },
  { width: 170, label: "Contact Number", dataKey: "contactNumber" },
  { width: 240, label: "Email", dataKey: "email" },
  { width: 130, label: "Role", dataKey: "role" },
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
  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user } : { ...blankForm });
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
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();

    [
      ["firstName", "First name"],
      ["lastName", "Last name"],
      ["age", "Age"],
      ["gender", "Gender"],
      ["contactNumber", "Contact number"],
      ["email", "Email"],
      ["role", "Role"],
      ["username", "Username"],
      ["password", "Password"],
      ["address", "Address"],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (!nextErrors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!nextErrors.age && !/^\d+$/.test(form.age.trim())) {
      nextErrors.age = "Age must be a number only.";
    }

    if (
      !nextErrors.contactNumber &&
      !/^\d{11}$/.test(form.contactNumber.trim())
    ) {
      nextErrors.contactNumber = "Contact number must be 11 digits.";
    }

    if (!nextErrors.username && /\s/.test(username)) {
      nextErrors.username = "Username must not contain spaces.";
    }

    if (!nextErrors.password && form.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (
      !nextErrors.email &&
      users.some((user) => user.id !== modal.id && user.email === email)
    ) {
      nextErrors.email = "Email address already exists.";
    }

    if (
      !nextErrors.username &&
      users.some((user) => user.id !== modal.id && user.username === username)
    ) {
      nextErrors.username = "Username already exists.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const nextUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    setUsers((prev) =>
      modal.id
        ? prev.map((user) =>
            user.id === modal.id ? { ...user, ...nextUser } : user,
          )
        : [
            ...prev,
            {
              id:
                prev.reduce(
                  (max, user) => Math.max(max, Number(user.id) || 0),
                  0,
                ) + 1,
              ...nextUser,
            },
          ],
    );

    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user,
      ),
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setRoleFilter("");
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
    const matchesRole = !roleFilter || user.role === roleFilter;
    const matchesGender = !genderFilter || user.gender === genderFilter;
    const matchesStatus =
      !statusFilter ||
      (statusFilter === "active" ? user.isActive : !user.isActive);

    return matchesSearch && matchesRole && matchesGender && matchesStatus;
  });

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    sx: textFieldSx,
    ...extra,
  });

  const rowContent = (_index, row) => (
    <>
      <TableCell>{row.id}</TableCell>
      <TableCell>{`${row.firstName} ${row.lastName}`.trim()}</TableCell>
      <TableCell>{row.username}</TableCell>
      <TableCell align="right">{row.age}</TableCell>
      <TableCell>{labelize(row.gender)}</TableCell>
      <TableCell>{row.contactNumber}</TableCell>
      <TableCell>{row.email}</TableCell>
      <TableCell sx={{ fontWeight: 600 }}>{labelize(row.role)}</TableCell>
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
            onClick={() => toggleStatus(row.id)}
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

      {seed.error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {seed.error}
        </Alert>
      ) : null}

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
                label="Role"
                value={roleFilter}
                onChange={(event) => setRoleFilter(event.target.value)}
                select
                sx={{ ...textFieldSx, flex: 1 }}
              >
                <MenuItem value="">All Roles</MenuItem>
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {labelize(role)}
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

          {users.length ? (
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

          {users.length && !filteredUsers.length ? (
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
                <TextField {...fieldProps("firstName", "First Name")} />
                <TextField {...fieldProps("lastName", "Last Name")} />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("age", "Age")} />
                <TextField
                  {...fieldProps("gender", "Gender", { select: true })}
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("contactNumber", "Contact Number")} />
                <TextField
                  {...fieldProps("email", "Email Address", {
                    type: "email",
                  })}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("role", "Role", { select: true })}>
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {labelize(role)}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField {...fieldProps("username", "Username")} />
              </Stack>

              <TextField
                {...fieldProps("password", "Password", {
                  type: showPassword ? "text" : "password",
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() => setShowPassword((prev) => !prev)}
                            onMouseDown={(event) => event.preventDefault()}
                            aria-label={
                              showPassword ? "Hide password" : "Show password"
                            }
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />

              <TextField
                {...fieldProps("address", "Address", {
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
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "success.light",
                        },
                    }}
                  />
                }
                label={
                  form.isActive
                    ? "User status: Active"
                    : "User status: Inactive"
                }
              />
            </Stack>
          </DialogContent>

          <DialogActions
            sx={{ px: 3, py: 2, backgroundColor: usersPalette.white }}
          >
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
