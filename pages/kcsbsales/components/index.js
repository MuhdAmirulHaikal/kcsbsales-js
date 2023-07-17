import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

/* #######################################
############## PROGRAM INFO ##############
##########################################*/

export const APP_NAME = "KCSBSALES";
export const APP_DESCRIPTION = "KCSB SALES";
export const APP_VERSION = "1.0.0";
export const APP_DEV = "EDP Team (South-East Regional Head Quarter)";
export const APP_YEAR = "2022";
export const baseURL = "http://194.1.141.51:3200";
export const token =
    "FD50RG/oqEoeyRxE-qbDefJe!ZjUKY=R6yusTiq2DJ8Z-lXrmy?2o3toXxOXbtVbeE0uj-o1VAZbJXaBNpcUPVveOR01UfT2LdcA!ane!2WSK0guH2Yx-3NNYh3WavQo";

/* #######################################
############## FUNCTION  #################
##########################################*/

export function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
}
export function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join("");
}


/* #######################################
############## API FUNCTION ###############
##########################################*/

export async function LoginKCSBSales(gid, uid, pass) {
    
    const APIUrl = baseURL + "/kcsbsales/login";

    return axios
        .get(APIUrl, { params: { group_id: gid, user_id: uid, user_pass: pass } })
        .then((res) => res.data);
}
