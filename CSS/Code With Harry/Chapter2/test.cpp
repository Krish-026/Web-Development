long long binpow(long long a, long long b) {
    a %= Mod;
    long long res = 1;
    while (b > 0) {
        if (b & 1)
            res = res * a % Mod;
        a = a * a % Mod;
        b >>= 1;
    }
    return res;
}