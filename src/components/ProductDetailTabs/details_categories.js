import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import {Checkbox} from "@material-ui/core";
import {faGripVertical} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import SaveIcon from '@material-ui/icons/Save';

/*const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: '100%',
        height: '450px',
        overflow: 'scroll'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.secondary
    },
    label: {
        color: "#aaa"
    },
    content: {
        color: "#000"
    }
}));*/

const useTreeItemStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.text.secondary,
        '&:focus > $content': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
            color: 'var(--tree-view-color)',
        },
    },
    content: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    group: {
        marginLeft: 0,
        '& $content': {
            paddingLeft: theme.spacing(2),
        },
    },
    expanded: {},
    label: {
        fontWeight: 'inherit',
        color: 'inherit',
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
    },
    checkbox: {
        marginRight: theme.spacing(1),
    },
}));

function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

    return (
        <TreeItem
            label={
                <div className={classes.labelRoot}>
                    <Checkbox className={classes.checkbox} />
                    <LabelIcon color="inherit" className={classes.labelIcon} />
                    <Typography variant="body2" className={classes.labelText}>
                        {labelText}
                    </Typography>
                    <Typography variant="caption" color="inherit">
                        {labelInfo}
                    </Typography>
                </div>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                group: classes.group,
                label: classes.label,
            }}
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
    root: {
        height: '450px',
        flexGrow: 1,
        maxWidth: '100%',
        overflow: 'scroll'
    },
});

export default function CategoryTree() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent disableSpacing>

                <div>
                    <Button aria-controls="simple-menu" aria-haspopup="true">
                        <SaveIcon />
                    </Button>

                </div>
                <TreeView
                    className={classes.root}
                    defaultExpanded={['3']}
                    defaultCollapseIcon={<ArrowDropDownIcon />}
                    defaultExpandIcon={<ArrowRightIcon />}
                    defaultEndIcon={<div style={{ width: 24 }} />}
                >
                    <StyledTreeItem nodeId="1" labelText="Storefront Catalog" labelIcon={Label}>
                        <StyledTreeItem nodeId="2" labelText="Men's" labelIcon={Label}>
                            <StyledTreeItem
                                nodeId="3"
                                labelText="Shirts"
                                labelIcon={SupervisorAccountIcon}
                                labelInfo="Dress, Flannel, T, Polos"
                                color="#1a73e8"
                                bgColor="#e8f0fe"
                            />
                            <StyledTreeItem
                                nodeId="4"
                                labelText="Pants"
                                labelIcon={InfoIcon}
                                labelInfo="Dress, Khakis, Chinos"
                                color="#e3742f"
                                bgColor="#fcefe3"
                            />
                            <StyledTreeItem
                                nodeId="5"
                                labelText="Blazers"
                                labelIcon={ForumIcon}
                                labelInfo="Sports Coats, Formals, Tux"
                                color="#a250f5"
                                bgColor="#f3e8fd"
                            />
                            <StyledTreeItem
                                nodeId="6"
                                labelText="Accessories"
                                labelIcon={LocalOfferIcon}
                                labelInfo="733"
                                color="#3c8039"
                                bgColor="#e6f4ea"
                            />
                        </StyledTreeItem>
                        <StyledTreeItem nodeId="7" labelText="Women's" labelIcon={Label}>
                            <StyledTreeItem
                                nodeId="8"
                                labelText="Accessories"
                                labelIcon={SupervisorAccountIcon}
                            >
                                <StyledTreeItem
                                    nodeId="9"
                                    labelText="Necklaces"
                                    labelIcon={InfoIcon}
                                    labelInfo="2,294"
                                    color="#e3742f"
                                    bgColor="#fcefe3"
                                />
                                <StyledTreeItem
                                    nodeId="10"
                                    labelText="Earrings"
                                    labelIcon={ForumIcon}
                                    labelInfo="3,566"
                                    color="#a250f5"
                                    bgColor="#f3e8fd"
                                />
                                <StyledTreeItem
                                    nodeId="11"
                                    labelText="Bracelets    "
                                    labelIcon={LocalOfferIcon}
                                    labelInfo="733"
                                    color="#3c8039"
                                    bgColor="#e6f4ea"
                                />
                            </StyledTreeItem>
                        </StyledTreeItem>
                    </StyledTreeItem>
                    <StyledTreeItem nodeId="12" labelText="Non - Storefront Catalog" labelIcon={Label} >
                        <StyledTreeItem nodeId="2" labelText="Home Decor" labelIcon={Label}>
                            <StyledTreeItem
                                nodeId="3"
                                labelText="Art"
                                labelIcon={SupervisorAccountIcon}
                                labelInfo="90"
                                color="#1a73e8"
                                bgColor="#e8f0fe"
                            />
                        </StyledTreeItem>
                    </StyledTreeItem>
                </TreeView>

            </CardContent>
        </Card>
    );
}
