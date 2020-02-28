import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BreadCrumb = (props) => {
  let history = useHistory();
  let location = useLocation();

  const pieces = location.pathname.split('/').slice(1);

  const formatPiece = (piece) => {
    return piece.split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  }

  const handleNavigate = (index) => {
    const url = pieces.reduce((acc, cur, i) => {
      if (i <= index) {
        return acc + '/' + cur;
      }
      return acc;
    }, '');
    
    history.push(url);
  }

  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" style={{ marginBottom: 10 }}>
      {pieces.map((piece, i) => {
        if (pieces.length === i + 1) {
          return (
            <Typography key={i} color="textPrimary">{formatPiece(piece)}</Typography>
          );
        } else {
          return (  
            <Link key={i} color="inherit" onClick={() => handleNavigate(i)}>
              {formatPiece(piece)}
            </Link>
          );
        }
      })}
    </Breadcrumbs>
  );
}

export default BreadCrumb;