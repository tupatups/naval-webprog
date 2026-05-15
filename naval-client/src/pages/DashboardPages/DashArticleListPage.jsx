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
  MenuItem,
  Paper,
  Stack,
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
  InputAdornment,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TitleIcon from "@mui/icons-material/Title";
import ArticleIcon from "@mui/icons-material/Article";
import LinkIcon from "@mui/icons-material/Link";
import { TableVirtuoso } from "react-virtuoso";
import {
  fetchArticles,
  createArticle,
  updateArticle,
} from "../../services/ArticleService.js";

// ─── Palette (matches UsersPage) ──────────────────────────────────────────────
const palette = {
  lilac: "#DCC9E5",
  white: "#FFFFFF",
  text: "#3E2C41",
};

// ─── Shared SX ────────────────────────────────────────────────────────────────
const cardSx = {
  borderRadius: "24px",
  border: `1px solid ${palette.lilac}`,
  backgroundColor: palette.white,
  boxShadow: "0 16px 40px rgba(90, 42, 110, 0.08)",
};

const primaryButtonSx = {
  borderRadius: "999px",
  height: 36,
  px: 2,
  backgroundColor: "success.main",
  color: palette.white,
  fontSize: "0.72rem",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  boxShadow: "0 10px 22px rgba(46, 125, 50, 0.28)",
  "&:hover": { backgroundColor: "success.dark" },
};

const outlinedButtonSx = {
  borderRadius: "999px",
  borderColor: "warning.main",
  color: "warning.main",
  fontWeight: 700,
  "&:hover": {
    borderColor: "warning.dark",
    backgroundColor: "rgba(237,108,2,0.08)",
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
    backgroundColor: palette.white,
    "& fieldset": { borderColor: palette.lilac },
    "&:hover fieldset": { borderColor: palette.lilac },
    "&.Mui-focused fieldset": { borderColor: palette.lilac },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: palette.text },
};

// ─── Blank form ───────────────────────────────────────────────────────────────
const blankForm = {
  title: "",
  slug: "",
  content: "",
  status: "active",
};

const statuses = ["active", "inactive"];
const labelize = (v) =>
  v ? `${v.charAt(0).toUpperCase()}${v.slice(1)}` : "";

// ─── Virtuoso table setup ─────────────────────────────────────────────────────
const tableColumns = [
  { width: 80,  label: "ID",         dataKey: "id" },
  { width: 160, label: "Slug",       dataKey: "slug" },
  { width: 200, label: "Title",      dataKey: "title" },
  { width: 100, label: "Paragraphs", dataKey: "paragraphs", numeric: true },
  { width: 300, label: "Preview",    dataKey: "preview" },
  { width: 110, label: "Status",     dataKey: "status" },
  { width: 180, label: "Actions",    dataKey: "actions" },
];

const VirtuosoScroller = forwardRef((props, ref) => (
  <TableContainer component={Paper} {...props} ref={ref} />
));
VirtuosoScroller.displayName = "VirtuosoScroller";

function VirtuosoTable(props) {
  return (
    <Table
      {...props}
      sx={{
        borderCollapse: "separate",
        tableLayout: "fixed",
        "& .MuiTableCell-head": {
          backgroundColor: palette.white,
          color: palette.text,
          fontWeight: 700,
        },
      }}
    />
  );
}

const VirtuosoTableHead = forwardRef((props, ref) => (
  <TableHead {...props} ref={ref} />
));
VirtuosoTableHead.displayName = "VirtuosoTableHead";

const VirtuosoTableBody = forwardRef((props, ref) => (
  <TableBody {...props} ref={ref} />
));
VirtuosoTableBody.displayName = "VirtuosoTableBody";

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
      {tableColumns.map((col) => (
        <TableCell
          key={col.dataKey}
          variant="head"
          align={col.numeric ? "right" : "left"}
          style={{ width: col.width }}
        >
          {col.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
const DashArticleListPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // ── Data fetching ──────────────────────────────────────────────────────────
  const loadArticles = async () => {
    try {
      setLoading(true);
      const { data } = await fetchArticles();
      setArticles(data.articles || data || []);
    } catch (err) {
      console.error("Error fetching articles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  // ── Modal helpers ──────────────────────────────────────────────────────────
  const openModal = (article) => {
    setModal({ open: true, id: article?._id ?? null });
    setForm(article ? { ...blankForm, ...article } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setForm(blankForm);
    setErrors({});
  };

  const handleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // ── Validation ─────────────────────────────────────────────────────────────
  const validate = () => {
    const nextErrors = {};
    [
      ["title", "Title"],
      ["slug", "Slug"],
      ["content", "Content"],
      ["status", "Status"],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) nextErrors[key] = `${label} is required.`;
    });

    if (!nextErrors.slug && /\s/.test(form.slug.trim())) {
      nextErrors.slug = "Slug must not contain spaces.";
    }
    if (
      !nextErrors.slug &&
      articles.some((a) => a._id !== modal.id && a.slug === form.slug.trim())
    ) {
      nextErrors.slug = "Slug already exists.";
    }
    return nextErrors;
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate();
    
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      console.log("Validation blocked the save. Errors:", nextErrors); // Debugging help
      return;
    }
    
    try {
      if (modal.id) {
        await updateArticle(modal.id, form);
      } else {
        await createArticle(form);
      }
      loadArticles();
      closeModal();
    } catch (err) {
      console.error("Error saving article:", err);
      alert("Failed to save article. Check console for details.");
    }
  };

  // ── Toggle status ──────────────────────────────────────────────────────────
  const toggleStatus = async (id, currentStatus) => {
    try {
      await updateArticle(id, {
        status: currentStatus === "active" ? "inactive" : "active",
      });
      loadArticles();
    } catch (err) {
      console.error("Error toggling status:", err);
    }
  };

  // ── Filters ────────────────────────────────────────────────────────────────
  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
  };

  const filteredArticles = articles.filter((a) => {
    const q = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !q ||
      [a.title, a.slug].some((v) => String(v).toLowerCase().includes(q));
    const matchesStatus = !statusFilter || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // ── Field props helper ─────────────────────────────────────────────────────
  // FIXED: Separated InputProps to prevent React warnings about standard DOM elements
  const fieldProps = (name, label, IconComponent, extra = {}) => {
    const { InputProps, ...restOfExtra } = extra;
    
    return {
      name,
      label,
      value: form[name],
      onChange: handleChange,
      error: Boolean(errors[name]),
      helperText: errors[name],
      fullWidth: true,
      sx: textFieldSx,
      InputProps: {
        startAdornment: IconComponent ? (
          <InputAdornment position="start">
            <IconComponent sx={{ color: palette.lilac }} />
          </InputAdornment>
        ) : null,
        ...InputProps,
      },
      ...restOfExtra,
    };
  };

  // ── Row content ────────────────────────────────────────────────────────────
  const rowContent = (index, row) => {
    const paragraphs = row.content
      ? row.content.split("\n").filter(Boolean).length
      : 0;
    const preview = row.content ? row.content.slice(0, 60) + "…" : "—";
    const isActive = row.status === "active";

    return (
      <>
        <TableCell sx={{ color: "text.secondary", fontSize: "0.85rem" }}>
          {row._id ? `A${row._id.slice(-5).toUpperCase()}` : index + 1}
        </TableCell>
        <TableCell>{row.slug}</TableCell>
        <TableCell sx={{ fontWeight: 600 }}>{row.title}</TableCell>
        <TableCell align="right">{paragraphs}</TableCell>
        <TableCell sx={{ color: "text.secondary", fontSize: "0.82rem" }}>
          {preview}
        </TableCell>
        <TableCell>
          <Chip
            size="small"
            label={isActive ? "Active" : "Inactive"}
            color={isActive ? "success" : "warning"}
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
              color={isActive ? "warning" : "success"}
              onClick={() => toggleStatus(row._id, row.status)}
              sx={{ borderRadius: "999px", fontWeight: 700, boxShadow: "none" }}
            >
              {isActive ? "Disable" : "Activate"}
            </Button>
          </Stack>
        </TableCell>
      </>
    );
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <Stack spacing={3} sx={{ width: "100%", minWidth: 0 }}>
      {/* Header card */}
      <Card sx={{ ...cardSx, backgroundColor: palette.white }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", md: "flex-start" }}
            spacing={3}
          >
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="h4"
                sx={{ mt: 1.5, color: palette.text, fontWeight: 700 }}
              >
                Articles
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() => openModal()}
              sx={{
                ...primaryButtonSx,
                ml: { md: "auto" },
                flexShrink: 0,
                alignSelf: { xs: "flex-start", md: "flex-start" },
              }}
            >
              Add Article
            </Button>
          </Stack>
        </CardContent>
      </Card>

      {/* Table card */}
      <Card sx={{ ...cardSx, minWidth: 0, overflow: "hidden" }}>
        <CardContent sx={{ p: { xs: 1.5, sm: 2 } }}>
          <Stack spacing={2} sx={{ mb: 2 }}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              spacing={2}
              alignItems={{ xs: "stretch", lg: "center" }}
            >
              <TextField
                label="Search Articles"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search title or slug"
                sx={{ ...textFieldSx, flex: 1.5 }}
              />
              <TextField
                label="Status Filter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                select
                sx={{ ...textFieldSx, flex: 1 }}
              >
                <MenuItem value="">All Statuses</MenuItem>
                {statuses.map((s) => (
                  <MenuItem key={s} value={s}>
                    {labelize(s)}
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

            <Typography sx={{ color: palette.text, opacity: 0.75 }}>
              Showing {filteredArticles.length} of {articles.length} articles
            </Typography>
          </Stack>

          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 400,
              }}
            >
              <CircularProgress sx={{ color: palette.lilac }} />
            </Box>
          ) : articles.length ? (
            <Paper
              sx={{
                height: { xs: 460, sm: 520 },
                width: "100%",
                overflow: "hidden",
                border: `1px solid ${palette.lilac}`,
                borderRadius: "16px",
              }}
            >
              <TableVirtuoso
                data={filteredArticles}
                components={VirtuosoTableComponents}
                fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
              />
            </Paper>
          ) : (
            <Alert severity="info">
              No articles found. Use Add Article to create your first record.
            </Alert>
          )}

          {!loading && articles.length > 0 && !filteredArticles.length && (
            <Alert
              severity="info"
              sx={{
                mt: 2,
                borderRadius: "14px",
                backgroundColor: palette.white,
                color: palette.text,
              }}
            >
              No articles match the current search or filters.
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Modal */}
      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: { xs: 0, sm: "24px" },
            border: { xs: 0, sm: `1px solid ${palette.lilac}` },
            boxShadow: "0 18px 46px rgba(90, 42, 110, 0.16)",
          },
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle
            sx={{
              backgroundColor: palette.white,
              color: palette.text,
              fontWeight: 700,
            }}
          >
            {modal.id ? "Edit Article" : "Add Article"}
          </DialogTitle>

          <DialogContent
            dividers
            sx={{
              px: { xs: 2, sm: 3 },
              borderColor: palette.lilac,
              backgroundColor: palette.white,
            }}
          >
            <Stack spacing={2} sx={{ pt: 1 }}>
              <TextField {...fieldProps("title", "Title", TitleIcon)} />

              <TextField {...fieldProps("slug", "Slug", LinkIcon)} />

              <TextField
                {...fieldProps("content", "Content", ArticleIcon, {
                  multiline: true,
                  rows: 6,
                })}
              />

              <TextField
                {...fieldProps("status", "Status", null, { select: true })}
              >
                {statuses.map((s) => (
                  <MenuItem key={s} value={s}>
                    {labelize(s)}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </DialogContent>

          <DialogActions
            sx={{ px: 3, py: 2, backgroundColor: palette.white }}
          >
            <Button onClick={closeModal} sx={outlinedButtonSx}>
              Cancel
            </Button>
            {/* FIXED: Changed to type="button" and attached onClick handler directly */}
            <Button type="button" onClick={handleSubmit} variant="contained" sx={primaryButtonSx}>
              {modal.id ? "Update Article" : "Save Article"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Stack>
  );
};

export default DashArticleListPage;