import { useAuth } from "../contexts/AuthContext";
// import React, { useState } from 'react';

export default function Ajoutermesvins() {
  const { isAdmin } = useAuth();

  return <h1>Ajouter un vin</h1>;
}
